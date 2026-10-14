---
name: Admin bootstrap safety
description: Avoid duplicate super-admin creation when the phone secret is out of sync.
---

If `ADMIN_PHONE` does not match an existing super-admin account, preserve that existing account and do not create another administrator automatically. Never log secret values or overwrite an existing admin's password during phone reconciliation.

**Why:** A misaligned phone secret during initial setup can otherwise create an administrator under an unintended phone, then create duplicates on later restarts.

**How to apply:** Before bootstrapping an admin, check for any existing super-admin account and stop automatic creation when one already exists; reconcile its phone through a secure, verified path.
