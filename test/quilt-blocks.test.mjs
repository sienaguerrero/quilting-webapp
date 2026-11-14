import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

import { blockShapes, cutList, nearestRulerSizes } from '../src/lib/quilt-blocks.js';
import { Fraction } from '../src/lib/ruler.js';

const load = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url)));
const { blocks } = load('../src/data/quilt-blocks.json');
const golden = load('./fixtures/quilt-blocks-golden.json').blocks;

const str = (value) => (value === null ? null : value.toString());

test('every exported block has a golden answer', () => {
  assert.deepEqual(Object.keys(blocks).sort(), Object.keys(golden).sort());
});

for (const [slug, block] of Object.entries(blocks)) {
  test(`${slug} draws the same polygons as Python`, () => {
    const shapes = blockShapes(block).map(({ fabric, points }) => ({
      fabric,
      points: points.map(([x, y]) => [str(x), str(y)]),
    }));
    assert.deepEqual(shapes, golden[slug].shapes);
  });

  for (const expected of golden[slug].sizes) {
    test(`${slug} at ${expected.size}" cuts the same as Python`, () => {
      const size = Fraction.from(expected.size);
      const cuts = cutList(block, size).map((line) => ({
        fabric: line.fabric,
        cut: line.cut,
        width: str(line.width),
        height: str(line.height),
        needed: line.needed,
        count: line.count,
        onRuler: line.onRuler,
      }));
      assert.deepEqual(cuts, expected.cuts);
      if (expected.nearestRulerSizes) {
        assert.deepEqual(nearestRulerSizes(block, size).map(str), expected.nearestRulerSizes);
      }
    });
  }
}
