# @\_linked/icons

## 1.1.4

### Patch Changes

- [#21](https://github.com/linked-fw/icons/pull/21) [`491b95e`](https://github.com/linked-fw/icons/commit/491b95e5c6d28fadbeb48fb8d3dbd6d1879537ed) Thanks [@renovate](https://github.com/apps/renovate)! - Support lucide-react 1.x. The `Icons` names are unchanged: where lucide 1.x renamed a glyph
  (`AlertCircle` → `CircleAlert`, `Trash2` → `Trash`, `Loader2` → `LoaderCircle`, …) the set
  still imports the old name, which lucide keeps as an alias, so the same build works against
  both majors. The `lucide-react` peer range is now `^0.439.0 || ^1.0.0` instead of the
  open-ended `>=0.4`, which admitted versions that lack icons this set imports and any future
  major that drops those aliases.
  
  Under lucide 1.x, lucide-backed icons render with `aria-hidden="true"` by default, several
  glyphs have redrawn paths, and the kebab class of digit-suffixed icons changes
  (`lucide-trash2` → `lucide-trash-2`).

## 1.1.3

### Patch Changes

- [#25](https://github.com/linked-fw/icons/pull/25) [`6e34f22`](https://github.com/linked-fw/icons/commit/6e34f220675dbe4f09e854cb93ad638706109587) Thanks [@flyon](https://github.com/flyon)! - Subpath imports (`@_linked/icons/icons`) now resolve in Vite dev. The `./*` export listed a `development` condition pointing at `./src/*.ts`, but `src/` is not published, and Vite enables `development` by default — so the subpath resolved to a file that does not exist. Every export now points into `lib/esm`.
  
  The package is now ESM-only, like the rest of the Linked packages: the `require` condition and the `lib/cjs` build are gone and `"type": "module"` is set. A CommonJS `require('@_linked/icons')` no longer resolves; use `import`.

## 1.1.2

### Patch Changes

- [#12](https://github.com/linked-fw/icons/pull/12) [`e2777a8`](https://github.com/linked-fw/icons/commit/e2777a82493a6d404ce2b91776409aa891a44392) Thanks [@flyon](https://github.com/flyon)! - Sourcemaps now embed their TypeScript source, so consumers no longer see 'points to missing source files' warnings.

## 1.1.1

### Patch Changes

- [#9](https://github.com/linked-fw/icons/pull/9) [`df7b53e`](https://github.com/linked-fw/icons/commit/df7b53e12d82ec37855f3df87caed5825ef63376) Thanks [@flyon](https://github.com/flyon)! - Declare `linkedPackage: true` in the manifest. This is the flag the Linked tooling keys on, so
  until now `icons` was invisible to it: `linked build` refused the package outright, `linked
build-all` skipped it, and a symlinked source checkout of it was not registered by the
  dependency pass of the Vite `discoverWorkspaces` — which is what lets an app resolve a linked
  package's `src/` in dev. No source, export or API change.

## 1.1.0

### Minor Changes

- [#7](https://github.com/linked-fw/icons/pull/7) [`0a64a11`](https://github.com/linked-fw/icons/commit/0a64a116c86caffb0b94889449d8a4c62f2dc029) Thanks [@flyon](https://github.com/flyon)! - Require `@_linked/core@^2.22.8` (was `^2.0`), and pin it in the lockfile.

  The declared range was wide enough that the resolved core depended on whatever the
  consumer — or this repo's own CI, via `package-lock.json` — happened to install. Core
  decides how a shape's IRI is minted, so a stale core made this package emit legacy
  `data.lincd.org` IRIs instead of the arch-02 `linked.cm` scheme. Which IRIs a published
  package produces should not be a function of the installer's dependency tree.

  Minor rather than patch: this raises the minimum core a consumer must resolve, so it
  changes what gets installed rather than only what this package does internally.

## 1.0.3

### Patch Changes

- [#5](https://github.com/linked-fw/icons/pull/5) [`4aaa57a`](https://github.com/linked-fw/icons/commit/4aaa57a1af006efca9fe2dc93f3e4b49d03afbd9) Thanks [@flyon](https://github.com/flyon)! - Compile the whole `src` folder, and let a bare import resolve under Node10.

  The build only emitted what an entry transitively reached, so any module
  nothing imported was never built — and never type-checked, so it rotted
  quietly. `include` now covers `src/**/*` with tests excluded explicitly.

  `typesVersions` maps every specifier through `lib/esm/*`, so a `types` value
  that already carried that prefix had it applied twice and no consumer on
  classic Node10 resolution could `import` the package by its bare name.

## 1.0.2

### Patch Changes

- [#3](https://github.com/linked-fw/icons/pull/3) [`967393e`](https://github.com/linked-fw/icons/commit/967393e7be794adeb4e198a9fe1c3f4e6fbbba70) Thanks [@flyon](https://github.com/flyon)! - Declare npm as the package manager for this repo, convert the build scripts off `yarn`, and mark `package-lock.json` as a generated file.

## 1.0.1

### Patch Changes

- [`f8f0ca4`](https://github.com/linked-cm/icons/commit/f8f0ca432fcc623c9a3618dfc8a7cd7b0c8681ca) Thanks [@flyon](https://github.com/flyon)! - Stop declaring `*.module.css` globally.

  This package has no CSS. The declaration came from the `create-package` template and was
  shipped in `lib/esm/types.d.ts`, where it became a **global ambient declaration in every
  consumer** — so any consumer that legitimately declares `*.module.css` itself (because it does
  have CSS modules and needs them typed) got "Duplicate identifier" and could not build.

  A package should only declare ambient modules it actually uses.
