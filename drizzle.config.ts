import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.SUPABASE_NEW_DATABASE_URL;

if (!databaseUrl) {
  throw new Error("SUPABASE_NEW_DATABASE_URL must be configured.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
