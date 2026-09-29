---
name: Clapay contract configuration
description: Why Clapay's API contract is configured in Plesk rather than guessed in application code.
---

Clapay's base URL, authentication header format, initiation path and request fields, response paths, operator response shape, and terminal status values must follow the merchant's current Clapay documentation. Keep credentials and contract settings in Plesk environment variables rather than application settings or the database. Do not treat browser returns or callbacks as proof of payment; confirm status with Clapay's authenticated status endpoint and use the existing idempotent deposit approval gate before crediting funds.

For initiation requests in every country routed to Clapay, send only the local subscriber number, without the country calling code; in Niger this is the 8 local digits. Keep the international number for the UI and stored deposit record, and strip the selected country's configured prefix only when filling Clapay's outgoing phone placeholders.

If an initiation request times out or returns an ambiguous response, preserve the deposit as processing and retain its merchant transaction reference so a signed callback can reconcile it. Do not mark it rejected unless Clapay definitively refused the request. When operator metadata marks `otpstarter.MERCHANT` true, collect the operator OTP only for the deposit flow and send it as `operator_otp`; never persist or log the OTP. Clapay payouts do not require an operator OTP, even when the shared operator metadata marks one required for deposits; never ask for or send `operator_otp` on payout requests.

**Why:** A live initiation was rejected with an invalid-phone response. The user clarified that Clapay requires only the local number in every country routed to it; removing `+` alone is insufficient. Other providers may require international formatting.

**How to apply:** At the Clapay server boundary, remove the configured calling code from an explicitly international number before filling phone placeholders; leave local-only numbers unchanged. Keep the displayed prefix and stored account number unchanged, and do not alter other providers' payloads. Check available documentation before changing other contract details. Keep status lookup server-side, preserve per-country routing, and make retries safe when the provider may already have accepted a request.

**Why:** The operator's OTP metadata describes the Clapay deposit flow, not payouts. Reusing it for payout validation incorrectly blocks payouts for operators that require OTP only when depositing.

**How to apply:** Keep deposit OTP handling separate from the payout options, form, server validation, and payout request body.