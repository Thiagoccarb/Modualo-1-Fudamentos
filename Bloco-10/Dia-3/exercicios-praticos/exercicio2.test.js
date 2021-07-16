const service = require('./exercicio2');
test("testar chamada da função multiplicar e seu retorno p valor 10", () => {
  service.multiplicar = jest.fn().mockReturnValue(10);

  service.multiplicar();
  expect(service.multiplicar).toHaveBeenCalled();
  expect(service.multiplicar()).toBe(10);
});