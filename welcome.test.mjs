import assert from 'node:assert/strict';
import { test } from 'node:test';
import { welcome } from './welcome.mjs';

test('welcomes a visitor in French with the greet library', () => {
  assert.equal(welcome('visitor'), 'Bonjour, visitor!');
});

test('welcomes a visitor by their own name in French', () => {
  assert.equal(welcome('Ada'), 'Bonjour, Ada!');
});
