---
name: Clapay contract configuration
description: Why Clapay's API contract is configured in Plesk rather than guessed in application code.
---

Clapay's base URL, authentication header format, initiation path and request fields, response paths, operator response shape, and terminal status values must follow the merchant's current Clapay documentation. Keep credentials and contract settings in Plesk environment variables rather than application settings or the database. Do not treat browser returns or callbacks as proof of payment; confirm status with Clapay's authenticated status endpoint and use the existing idempotent deposit approval gate before crediting funds.

**Why:** The project conversation retained only the status, country, and operator endpoint paths, not the full request/response contract. Guessing payment fields or authentication could create failed or unsafe deposits.

**How to apply:** When the merchant's documentation is available, configure or refine the Plesk variables and JSON field-path templates to match it exactly. Keep the status lookup server-side and preserve per-country routing behavior.