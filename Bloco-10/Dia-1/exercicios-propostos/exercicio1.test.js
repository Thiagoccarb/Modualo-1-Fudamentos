const sum = require('./exercicio1');

describe("homework jest basic exercises", () => {
  test('sum() returns the sum of two numbers passed as parameters', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('sum() returns the sum of two numbers passed as parameters', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum() returns error if none parameters is passed', () => {
    expect(() => sum(4, '5').toThrow())
  });

  test('sum() returns error if none parameters is passed', () => {
    expect(() => sum(4, '5').toThrowError(new Error ("parameters must be numbers" )))
  });
});
