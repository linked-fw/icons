---
'@_linked/icons': patch
---

Subpath imports (`@_linked/icons/icons`) now resolve in Vite dev. The `./*` export listed a `development` condition pointing at `./src/*.ts`, but `src/` is not published, and Vite enables `development` by default — so the subpath resolved to a file that does not exist. Every export now points into `lib/esm`.

The package is now ESM-only, like the rest of the Linked packages: the `require` condition and the `lib/cjs` build are gone and `"type": "module"` is set. A CommonJS `require('@_linked/icons')` no longer resolves; use `import`.
