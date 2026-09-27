---
name: Clapay contract configuration
description: Why Clapay's API contract is configured in Plesk rather than guessed in application code.
---

Clapay's base URL, authentication header format, initiation path and request fields, response paths, operator response shape, and terminal status values must follow the merchant's current Clapay documentation. Keep credentials and contract settings in Plesk environment variables rather than application settings or the database. Do not treat browser returns or callbacks as proof of payment; confirm status with Clapay's authenticated status endpoint and use the existing idempotent deposit approval gate before crediting funds.

**Why:** The user confirms the complete documentation was already sent in chat, but context compaction can leave the active session with only a summary. Guessing payment fields or authentication could create failed or unsafe deposits, and asking for the document again would ignore what the user already provided.

**How to apply:** Check the currently available chat context and project files first. If the document itself is absent after compaction, state that access limitation without asking the user to resend it or claiming API compliance. When the documentation is available, match Plesk variables and JSON field-path templates to it exactly; keep status lookup server-side and preserve per-country routing behavior.