import assert from 'node:assert/strict';
import { test } from 'node:test';
import { welcome } from './welcome.mjs';

test('welcomes a visitor with the greet library', () => {
  assert.equal(welcome('visitor'), 'Hello, visitor!');
});
