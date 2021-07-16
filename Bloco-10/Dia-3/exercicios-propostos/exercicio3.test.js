const random = require('./exercicio2');
const service = require('./exercicio2');
test('testing function random', () => {
  const mockRandom = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c);

  expect(mockRandom(1, 10, 5)).toBe(50);
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom).toHaveBeenCalledWith(1, 10, 5);

  mockRandom.mockRestore();
  mockRandom.mockImplementation((a) => 2 * a);

  expect(mockRandom(10)).toBe(20);
  expect(mockRandom).toHaveBeenCalled();
  expect(mockRandom).toHaveBeenCalledTimes(1);
  expect(mockRandom).toHaveBeenCalledWith(10);


});