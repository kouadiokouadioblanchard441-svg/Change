---
name: Deposit checkout routing
description: Client deposit checkout must not expose aggregator selection.
---

Do not ask clients to choose the payment aggregator on the deposit screen. After amount and country are set, use the blue RobotPay flow for operator/payment steps where supported; keep provider identifiers and names in the backend and administration.

For manual deposits, keep each destination operator, account number, and holder name in database-backed admin-managed payment-number records. The RDC can offer several manual destination accounts within the single manual payment route; never hardcode account details in source.

**Why:** The user objected to exposing provider selection in the customer deposit flow. Guessing between multiple active methods could send a payment through the wrong provider.

**How to apply:** Automatically use the method when exactly one is configured for a country and navigate to RobotPay for supported providers. For the manual route, read destination accounts from the database and let users choose among active configured records. If multiple payment routes are active, do not choose one silently; require an explicit admin-side priority or resolve the configuration before allowing the deposit. Keep provider-specific external checkout redirects only where RobotPay does not support that provider.