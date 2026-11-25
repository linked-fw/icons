---
"@_linked/icons": patch
---

Drop the unused `@_linked/core` dependency. The icon set never imported it, and its old `^2` range made an app on `@_linked/core` 3 install a second, nested copy of core. Builds with `@_linked/cli` 2.
