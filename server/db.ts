import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// The app uses the newly provisioned Supabase database exclusively.
const databaseUrl = process.env.SUPABASE_NEW_DATABASE_URL;

if (!databaseUrl) {
  throw new Error("SUPABASE_NEW_DATABASE_URL must be configured.");
}

export const pool = new Pool({
  connectionString: databaseUrl,
  ssl: { rejectUnauthorized: false },
});
export const db = drizzle(pool, { schema });
