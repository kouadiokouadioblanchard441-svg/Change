---
name: Deposit checkout routing
description: Client deposit checkout must not expose aggregator selection.
---

Do not ask clients to choose the payment aggregator on the deposit screen. Route through the method configured for their country; keep provider identifiers and names in the backend and administration.

**Why:** The user objected to exposing provider selection in the customer deposit flow. Guessing between multiple active methods could send a payment through the wrong provider.

**How to apply:** Automatically use the method when exactly one is configured for a country. If multiple are active, do not choose one silently; require an explicit admin-side priority or resolve the configuration before allowing the deposit.