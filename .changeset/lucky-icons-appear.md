---
'@_linked/icons': patch
---

Declare `linkedPackage: true` in the manifest. This is the flag the Linked tooling keys on, so
until now `icons` was invisible to it: `linked build` refused the package outright, `linked
build-all` skipped it, and a symlinked source checkout of it was not registered by the
dependency pass of the Vite `discoverWorkspaces` — which is what lets an app resolve a linked
package's `src/` in dev. No source, export or API change.
