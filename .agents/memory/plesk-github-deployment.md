---
name: Plesk GitHub deployment
description: Production deployment uses a committed dist build and a Node.js startup file relative to the application root.
---

For this project, Plesk must pull the versioned `dist` directory from GitHub; the production server starts `dist/index.cjs` and serves static files from `dist/public`.

**Why:** Plesk does not automatically see the Replit workspace build, and a missing or incorrect document root causes either “startup file not found” or a 403 response.

**How to apply:** Keep `dist` tracked for Plesk pulls, use `/dist/public` as the document root relative to the application root, use `dist/index.cjs` as the startup file, and provide `SUPABASE_NEW_DATABASE_URL` plus `SESSION_SECRET` as server environment variables.

Plesk can serve the current static `index.html` while its Node.js process is failing; a working `/` is not proof that login or API routes work. The downloadable `plesk-deploy-bundle.zip` is separate from GitHub's tracked `dist` and can become stale.

**Why:** The live homepage matched the current `dist/public/index.html` exactly while `/login` and `/api/health` returned Plesk 500 errors, and the archived bundle contained older build files.

**How to apply:** Verify `/` and a real API route independently. Confirm whether Plesk deploys from GitHub or from the ZIP before changing either artifact; keep the ZIP refreshed when it is the chosen deployment source.

The August ZIP uses `SUPABASE_DATABASE_URL`, while the current Plesk Node environment uses `SUPABASE_NEW_DATABASE_URL`; the current source and September build use the latter.

**Why:** The legacy archive can fail at startup against the current Plesk environment, even when the newly named database variable is configured and reachable.

**How to apply:** Do not deploy the August archive as a substitute for the current build unless its legacy database variable is deliberately mapped to the intended production database and the older schema/application compatibility is confirmed.