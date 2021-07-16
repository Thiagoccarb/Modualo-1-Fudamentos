const service = require('./exercicio5');

test('Testa chamada, retorno e parâmetros da função dividir', () => {
  const mockSubtrair = jest.spyOn(service, "subtrair");
  mockSubtrair.mockImplementation((a, b) => a * b);
  mockSubtrair.mockReturnValue(20);


  expect(mockSubtrair(4, 2)).toBe(20);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(4, 2);

  mockSubtrair.mockRestore();

  expect(mockSubtrair(6, 2)).toBe(undefined);
  expect(mockSubtrair).toHaveBeenCalled();
  expect(mockSubtrair).toHaveBeenCalledTimes(1);
  expect(mockSubtrair).toHaveBeenCalledWith(6, 2);
});