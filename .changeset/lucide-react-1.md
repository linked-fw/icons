---
'@_linked/icons': patch
---

Support lucide-react 1.x. The `Icons` names are unchanged: where lucide 1.x renamed a glyph
(`AlertCircle` → `CircleAlert`, `Trash2` → `Trash`, `Loader2` → `LoaderCircle`, …) the set
still imports the old name, which lucide keeps as an alias, so the same build works against
both majors. The `lucide-react` peer range is now `^0.439.0 || ^1.0.0` instead of the
open-ended `>=0.4`, which admitted versions that lack icons this set imports and any future
major that drops those aliases.

Under lucide 1.x, lucide-backed icons render with `aria-hidden="true"` by default, several
glyphs have redrawn paths, and the kebab class of digit-suffixed icons changes
(`lucide-trash2` → `lucide-trash-2`).
