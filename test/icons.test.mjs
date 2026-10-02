// Runs against the built `lib`, not `src`: what consumers import is the artifact. Importing it
// at all proves every lucide name `icons.tsx` asks for still exists in the installed
// lucide-react, because a missing named export fails ESM linking before any test runs.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Icons } from '../lib/esm/index.js';

test('every icon renders to an <svg>', () => {
  const entries = Object.entries(Icons);
  assert.ok(entries.length > 100, `expected the full set, got ${entries.length}`);
  for (const [name, Icon] of entries) {
    const markup = renderToStaticMarkup(createElement(Icon));
    assert.match(markup, /^<svg[\s>]/, `${name} did not render an svg`);
  }
});

// The keys are the public API. lucide renames its own icons between versions (AlertCircle ->
// CircleAlert, Trash2 -> Trash, ...); those renames must stay behind this object.
test('names consumers depend on are still present', () => {
  const required = [
    'Trash', 'Trash2', 'Cross2', 'X', 'Check', 'CheckLucide', 'Verified', 'Loader', 'Link',
    'Grid', 'Edit', 'Compare', 'Table', 'Calendar', 'PlusCircled', 'CaretSort',
    'AlertCircle', 'AlertTriangle', 'HelpCircle', 'MoreHorizontal', 'BarChart2', 'PieChart',
    'FileEdit', 'CheckCircle', 'History', 'AlignLeft', 'AlignCenter', 'AlignRight',
  ];
  for (const name of required) assert.ok(Icons[name] != null, `Icons.${name} missing`);
});

test('lucide-backed icons render as lucide icons', () => {
  const markup = renderToStaticMarkup(createElement(Icons.Trash));
  assert.match(markup, /class="lucide\b/);
});
