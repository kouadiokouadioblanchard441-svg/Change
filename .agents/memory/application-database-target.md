---
name: Application database target
description: The runtime database target differs from the default database tool target in this project.
---

The application uses the external Supabase PostgreSQL connection exposed as `SUPABASE_DATABASE_URL`. The default Replit database query target is not necessarily the database used by the running app.

**Why:** Test records written through the default database tool were not visible to the application, while direct writes through the runtime's Supabase connection were visible.

**How to apply:** For app data fixes or development fixtures, confirm the target against `server/db.ts` and use the project's documented Supabase migration path or an explicitly authorized Supabase operation. Never copy or expose the connection value.