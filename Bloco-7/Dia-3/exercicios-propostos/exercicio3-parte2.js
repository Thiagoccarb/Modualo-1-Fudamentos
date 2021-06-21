const assert = require('assert');

const sumAllNumbers = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[1];
  }
  return total;
};
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);