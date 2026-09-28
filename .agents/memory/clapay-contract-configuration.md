---
name: Clapay contract configuration
description: Why Clapay's API contract is configured in Plesk rather than guessed in application code.
---

Clapay's base URL, authentication header format, initiation path and request fields, response paths, operator response shape, and terminal status values must follow the merchant's current Clapay documentation. Keep credentials and contract settings in Plesk environment variables rather than application settings or the database. Do not treat browser returns or callbacks as proof of payment; confirm status with Clapay's authenticated status endpoint and use the existing idempotent deposit approval gate before crediting funds.

For initiation requests, Clapay expects the international customer phone number without a leading `+` (for example, `227` followed by the local number). Keep the plus sign in the user-facing country prefix, but remove it from Clapay's outgoing phone placeholders.

If an initiation request times out or returns an ambiguous response, preserve the deposit as processing and retain its merchant transaction reference so a signed callback can reconcile it. Do not mark it rejected unless Clapay definitively refused the request. When operator metadata marks `otpstarter.MERCHANT` true, collect the operator OTP only for that flow and send it as `operator_otp`; never persist or log the OTP.

**Why:** A live initiation was rejected with an invalid-phone response, and the user confirmed from Clapay's contract that the international number must omit its leading `+`. Keeping this normalization inside the Clapay backend avoids changing other providers' phone formats.

**How to apply:** Normalize Clapay phone placeholders server-side by removing only the leading `+`; keep the displayed country prefix unchanged. Check available documentation before changing other contract details. Keep status lookup server-side, preserve per-country routing, and make retries safe when the provider may already have accepted a request.