import pg from "pg";

const { Pool } = pg;

export async function inspectNewSupabase(): Promise<void> {
  const newUrl = process.env.SUPABASE_NEW_DATABASE_URL;
  const currentUrl = process.env.SUPABASE_DATABASE_URL || process.env.DATABASE_URL;
  if (!newUrl || !currentUrl) {
    console.log("[new-supabase-inspection] required database configuration unavailable");
    return;
  }

  const parseTarget = (url: string) => {
    const parsed = new URL(url);
    return `${parsed.hostname}:${parsed.port}${parsed.pathname}`;
  };
  const sameAsCurrent = parseTarget(newUrl) === parseTarget(currentUrl);
  if (sameAsCurrent) {
    console.log("[new-supabase-inspection] target matches current database; no inspection performed");
    return;
  }

  const pool = new Pool({
    connectionString: newUrl,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 10_000,
  });

  try {
    const tables = await pool.query<{ tablename: string }>(
      "SELECT tablename FROM pg_tables WHERE schemaname = $1 ORDER BY tablename",
      ["public"],
    );
    const tableCounts: Array<{ table: string; rows: number }> = [];
    for (const { tablename } of tables.rows) {
      const identifier = `"${tablename.replaceAll('"', '""')}"`;
      const result = await pool.query<{ count: string }>(
        `SELECT count(*)::bigint AS count FROM public.${identifier}`,
      );
      tableCounts.push({ table: tablename, rows: Number(result.rows[0].count) });
    }

    console.log("[new-supabase-inspection]", JSON.stringify({
      sameAsCurrent: false,
      publicTables: tableCounts,
    }));
  } finally {
    await pool.end();
  }
}