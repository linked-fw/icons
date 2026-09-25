# `@_linked/icons`

The Linked icon set: one place where an icon gets its name.

```tsx
import {Icons} from '@_linked/icons';

<Icons.Trash width={16} height={16} />
```

Most of the set is a re-export of [lucide](https://lucide.dev) under stable,
intention-revealing names. The rest are hand-drawn, for concepts lucide has no icon for.

## Why a package, and why this one

Applications and component packages reach for `Icons.Trash` rather than each choosing its own
alias for the same glyph — which is how a codebase ends up with `Trash2`, `TrashIcon` and
`Delete` all rendering the same thing. Swapping the underlying set, or overriding a single
glyph, then becomes a change here rather than a change everywhere.

It is its own package rather than part of `@_linked/primitives` for two reasons. Icons churn on
a different cadence — a designer adding a glyph should not cut a component-library release —
and `primitives` has a stated contract (a headless behaviour source plus a CSS module reading
theme tokens) that a re-export barrel does not fit. Keeping them apart also keeps `lucide-react`
out of the dependency tree of everything that renders a button.

## Installing

```bash
npm install @_linked/icons lucide-react
```

`lucide-react` is a **peer** dependency. The icons are re-exported, not wrapped, so a single
copy has to be shared with the consuming app — two copies means the same glyph exists twice in
the bundle.

## Where it sits

| Layer | Package | Knows about |
|---|---|---|
| Design tokens | `@_linked/css` | nothing |
| **Icons** | **`@_linked/icons`** | nothing — a named glyph set |
| Headless components | `@_linked/primitives` | the DOM and the tokens |
| Data binding | `@_linked/react` | shapes and queries |
| Shape-driven UI | `@_linked/shape-ui` | how to render an arbitrary shape |

See [arch-03 §UI package layering](https://github.com/linked-fw/create-now/blob/main/docs/architecture/03-packages-and-governance.md#ui-package-layering).

## Releasing

Add a changeset (`npx changeset`) with your change. On merge to `main`, CI opens a version PR;
merging that **stages** the release for a maintainer to approve with 2FA.
