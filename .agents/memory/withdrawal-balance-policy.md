---
name: Withdrawal balance policy
description: Business rule for separating the total wallet balance from the amount eligible for withdrawal.
---

The total wallet balance may include approved deposits, but the withdrawal balance must exclude the remaining deposit principal. Product and staking purchases consume protected deposit principal first; earnings, commissions, bonuses, and other non-deposit credits remain withdrawable.

**Why:** The user explicitly requires deposited money to remain visible in the total balance but never be withdrawable.

**How to apply:** Keep the withdrawal page and server-side withdrawal validation based on the withdrawable balance, not the raw user balance. Rejected withdrawals restore the amount to the same calculation.