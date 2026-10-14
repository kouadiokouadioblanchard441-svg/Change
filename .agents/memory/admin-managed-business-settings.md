---
name: Admin-managed business settings
description: Project rule for storing user-configurable financial and operational values in the database and exposing them in the admin panel.
---

Financial and operational values the user expects to change—such as deposit presets, minimums, fees, schedules, bonuses, commissions, and VIP terms—must be database-backed and editable from the admin panel rather than fixed in application code.

**Why:** the user has repeatedly asked to change these values without code edits, and startup behavior must not silently restore stale financial settings.

**How to apply:** Add settings to public/admin allowlists, validate them on save and use, seed defaults only when missing, and use one-time migrations that do not overwrite later admin changes. Confirm the live database values after a production settings update.
