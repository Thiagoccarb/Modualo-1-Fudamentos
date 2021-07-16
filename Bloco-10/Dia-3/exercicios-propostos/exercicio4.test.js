const service = require('./exercicio4');

test('testing functions by mocking module', () => {
  const mockUpper = jest.spyOn(service, 'upperCase');
  mockUpper.mockImplementation((str) => str.toLowerCase());

  expect(mockUpper('A')).toBe('a');
  expect(mockUpper).toHaveBeenCalled();
  expect(mockUpper).toHaveBeenCalledTimes(1);
  expect(mockUpper).toHaveBeenCalledWith('A');
});

test('testing functions by mocking module', () => {
  const firstLetter = jest.spyOn(service, 'firstLetter');
  firstLetter.mockImplementation((str) => str[str.length - 1]);

  expect(firstLetter('fafaf')).toBe('f');
  expect(firstLetter).toHaveBeenCalled();
  expect(firstLetter).toHaveBeenCalledTimes(1);
  expect(firstLetter).toHaveBeenCalledWith('fafaf');
});

test('testing functions by mocking module', () => {
  service.concat = jest.spyOn(service, 'concat');
  service.concat.mockImplementation((a, b, c) => a.concat(b, c));

  expect(service.concat('a', 'b', 'c')).toBe('abc');
  expect(service.concat).toHaveBeenCalled();
  expect(service.concat).toHaveBeenCalledTimes(1);
  expect(service.concat).toHaveBeenCalledWith('a', 'b', 'c');
});