# @\_linked/icons

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
