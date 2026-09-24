---
name: Workflow secret scope
description: Secret availability differs between ad hoc shell commands and managed app workflows
---

In this workspace, an ad hoc shell command did not receive Replit Secrets that the managed application workflow could use. A standalone helper therefore reported missing variables even though the app could connect to its configured database.

**Why:** Shell commands and managed workflows can run with different injected environments; secret-presence metadata does not prove a particular process received the value.

**How to apply:** Check only whether required keys are present, and run an authorized one-time helper through the actual managed workflow with a temporary guard. Remove the guard promptly and never print secret values.