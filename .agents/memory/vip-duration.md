---
name: VIP duration
description: Business rule for the duration and total return of VIP products.
---

Product cycle lengths, prices, and earnings are managed in the admin panel. A 200-day cycle may be used as an initial business value when explicitly configured, but application startup must never force that duration or overwrite catalog data. The total return remains derived from daily earnings multiplied by the configured cycle length.

**Why:** The user requested that product values be editable in the admin panel rather than fixed by application code.

**How to apply:** Treat the database values saved by admins as authoritative. Do not re-seed, migrate, or otherwise rewrite existing product prices, earnings, durations, or activation states automatically.