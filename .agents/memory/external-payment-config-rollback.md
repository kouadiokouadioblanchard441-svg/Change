---
name: External payment configuration rollback
description: Restoring payment code from GitHub may leave one-time country or provider settings persisted in external Supabase.
---

Restoring payment source files to a GitHub snapshot does not revert country/operator settings previously written to the app's external database by a seed migration. Confirm the target database before changing persisted configuration; preserve payment-number records and transaction history unless the user explicitly requests otherwise.

**Why:** A source rollback restored the repository state while the app API continued returning a previously migrated country method from Supabase. Resetting that setting would affect which deposit options users can access.

**How to apply:** After restoring payment code, compare the live API configuration with the chosen repository snapshot. If external data differs, explain the impact and get confirmation before changing the database.