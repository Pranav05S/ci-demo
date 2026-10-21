const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./greet');

test('greets a named person', () => {
  assert.strictEqual(greet('Pranav'), 'Hello, Pranav!');
});
test('greets a stranger when no name is given', () => {
  assert.strictEqual(greet(), 'Hello, stranger!');
});
