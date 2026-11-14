import assert from 'node:assert/strict';
import { test } from 'node:test';

import { flyingGeeseCuts, hstCut, plainCut, qstCut } from '../src/lib/quilt-blocks.js';
import { Fraction, onRuler, parseInches, roundUpToRuler, ruler } from '../src/lib/ruler.js';

const F = (n, d = 1) => new Fraction(n, d);
const same = (actual, expected) => assert.equal(actual.toString(), expected.toString());

test('plain squares add 1/2 inch', () => {
  same(plainCut(F(4)), F(9, 2));
});

test('half-square triangles add 7/8 inch', () => {
  same(hstCut(F(3)), F(31, 8));
});

test('quarter-square triangles add 1 1/4 inch', () => {
  same(qstCut(F(4)), F(21, 4));
});

test('flying geese cut the goose like a QST and the sky like an HST', () => {
  const [goose, sky] = flyingGeeseCuts(F(6), F(3));
  same(goose, F(29, 4));
  same(sky, F(31, 8));
});

test('reads sizes the ways quilters write them', () => {
  for (const text of ['10 1/2', '10.5', '10-1/2', '10 1/2"', '21/2']) {
    same(parseInches(text), F(21, 2));
  }
  assert.throws(() => parseInches('ten'));
});

test('prints ruler glyphs and falls back to a fraction slash', () => {
  assert.equal(ruler(F(31, 8)), '3⅞″');
  assert.equal(ruler(F(7, 8)), '⅞″');
  assert.equal(ruler(F(12)), '12″');
  assert.equal(ruler(F(101, 24)), '4 5⁄24″');
});

test('knows the 1/8 inch grid and rounds cuts up, never down', () => {
  assert.ok(onRuler(F(31, 8)));
  assert.ok(!onRuler(F(10, 3)));
  same(roundUpToRuler(F(55, 12)), F(37, 8));
  same(roundUpToRuler(12 * Math.SQRT2 + 1.25), F(73, 4));
});
