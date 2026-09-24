---
name: Mockup sandbox dependencies
description: Dependency resolution in the standalone component-preview Vite workspace
---

The component-preview sandbox has an independent dependency tree. A package installed at the project root may not satisfy imports in the sandbox, and its CSS transform can fail even when the main app builds.

**Why:** The preview server resolves modules from its own workspace rather than the app's root dependencies.

**How to apply:** When a sandbox preview fails on a missing CSS or Tailwind package, inspect and install the dependency in the sandbox workspace itself, then restart its managed workflow.