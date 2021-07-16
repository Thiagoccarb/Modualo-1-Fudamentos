const service = require('./exercicio2');
test('testing function random', () => {
  const mockRandom = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);

  expect(mockRandom(10, 5)).toBe(2);
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom).toHaveBeenCalledWith(10, 5);

});