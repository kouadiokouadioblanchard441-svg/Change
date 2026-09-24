import pg from "pg";
import { databaseIdentity } from "./restore-existing-supabase-account";

const { Pool } = pg;
const confirmedDevelopmentUserCount = 6;

function normalizePhone(value: string): string {
  return value.replace(/\D/g, "");
}

function quoteIdentifier(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

export async function clearReplitDevelopmentData(): Promise<void> {
  const sourceUrl = process.env.DATABASE_URL;
  const targetUrl = process.env.SUPABASE_NEW_DATABASE_URL;
  const phone = process.env.ADMIN_PHONE;
  const adminPin = process.env.ADMIN_PIN;

  const missingConfiguration = [
    ["DATABASE_URL", sourceUrl],
    ["SUPABASE_NEW_DATABASE_URL", targetUrl],
    ["ADMIN_PHONE", phone],
    ["ADMIN_PIN", adminPin],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingConfiguration.length > 0) {
    throw new Error(
      `[replit-cleanup] Missing configured variables: ${missingConfiguration.join(", ")}.`,
    );
  }
  if (databaseIdentity(sourceUrl) === databaseIdentity(targetUrl)) {
    throw new Error("[replit-cleanup] Refusing to clear data because source and Supabase are identical.");
  }

  const sourcePool = new Pool({
    connectionString: sourceUrl,
    ssl: { rejectUnauthorized: false },
  });
  const targetPool = new Pool({
    connectionString: targetUrl,
    ssl: { rejectUnauthorized: false },
  });

  let client: Awaited<ReturnType<typeof sourcePool.connect>> | undefined;
  let transactionOpen = false;

  try {
    client = await sourcePool.connect();
    await client.query("BEGIN");
    transactionOpen = true;

    const tableResult = await client.query<{ table_name: string }>(
      `SELECT table_name
       FROM information_schema.tables
       WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
       ORDER BY table_name`,
    );
    const tableNames = tableResult.rows.map(({ table_name }) => table_name);
    if (tableNames.length === 0 || !tableNames.includes("users")) {
      throw new Error("[replit-cleanup] Expected public application tables were not found.");
    }

    const qualifiedTables = tableNames.map(
      (tableName) => `public.${quoteIdentifier(tableName)}`,
    );
    await client.query(
      `LOCK TABLE ${qualifiedTables.join(", ")} IN ACCESS EXCLUSIVE MODE`,
    );

    const userCountResult = await client.query<{ user_count: string }>(
      "SELECT COUNT(*)::text AS user_count FROM public.users",
    );
    if (Number(userCountResult.rows[0]?.user_count) !== confirmedDevelopmentUserCount) {
      throw new Error(
        "[replit-cleanup] The development user count changed since confirmation; refusing to clear data.",
      );
    }

    let sourceUserResult = await client.query(
      "SELECT * FROM public.users WHERE phone = $1 LIMIT 2",
      [phone],
    );
    if (sourceUserResult.rows.length === 0) {
      const digits = normalizePhone(phone);
      const variants = Array.from(new Set([
        digits,
        digits.replace(/^0/, ""),
        `225${digits}`,
        `225${digits.replace(/^0/, "")}`,
      ]));
      sourceUserResult = await client.query(
        `SELECT * FROM public.users
         WHERE regexp_replace(phone, '[^0-9]', '', 'g') = ANY($1::text[])
         LIMIT 3`,
        [variants],
      );
    }
    if (sourceUserResult.rows.length !== 1) {
      throw new Error("[replit-cleanup] The source account could not be uniquely verified.");
    }

    const sourceUser = sourceUserResult.rows[0] as Record<string, unknown>;
    const targetUserResult = await targetPool.query(
      `SELECT password = $1::text AS password_matches,
              balance = $2::numeric AS balance_matches,
              is_admin IS TRUE AS is_admin,
              is_super_admin IS TRUE AS is_super_admin,
              admin_pin = $3::text AS pin_matches
       FROM public.users
       WHERE phone = $4
       LIMIT 2`,
      [sourceUser.password, sourceUser.balance, adminPin, phone],
    );
    const targetUser = targetUserResult.rows[0];
    if (
      targetUserResult.rows.length !== 1
      || targetUser.password_matches !== true
      || targetUser.balance_matches !== true
      || targetUser.is_admin !== true
      || targetUser.is_super_admin !== true
      || targetUser.pin_matches !== true
    ) {
      throw new Error(
        "[replit-cleanup] The Supabase account did not pass verification; refusing to clear the source.",
      );
    }

    await client.query(
      `TRUNCATE TABLE ${qualifiedTables.join(", ")} RESTART IDENTITY`,
    );

    const emptyCheck = tableNames
      .map((tableName, index) =>
        `SELECT ${index}::int AS table_index, COUNT(*)::bigint AS remaining_rows
         FROM public.${quoteIdentifier(tableName)}`,
      )
      .join(" UNION ALL ");
    const remainingRows = await client.query<{ remaining_rows: string }>(emptyCheck);
    if (remainingRows.rows.some(({ remaining_rows }) => BigInt(remaining_rows) !== 0n)) {
      throw new Error("[replit-cleanup] Some development tables still contain rows; refusing to commit.");
    }

    await client.query("COMMIT");
    transactionOpen = false;
    console.log(
      `[replit-cleanup] Cleared and verified ${tableNames.length} development tables; schema retained.`,
    );
  } catch (error) {
    if (client && transactionOpen) {
      await client.query("ROLLBACK");
    }
    if (error instanceof Error && error.message.startsWith("[replit-cleanup]")) {
      throw error;
    }
    throw new Error("[replit-cleanup] Cleanup failed; development data was not committed.");
  } finally {
    client?.release();
    await Promise.all([sourcePool.end(), targetPool.end()]);
  }
}