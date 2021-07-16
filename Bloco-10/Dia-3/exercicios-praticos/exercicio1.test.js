//  const operations = require('./exercicio1');
//  jest.mock('./jest-mock');

//  test('testing sub function', () => {
//    operations.subtrair.mockImplementation((a, b) => a - b);
//    const result = operations.subtrair(2, 1);

//    expect(operations.subtrair).toHaveBeenCalled();
//    expect(operations.subtrair).toHaveBeenCalledTimes(1);
//    expect(result).toBe(1);
//  });
const service = require('./exercicio1');

 test("testar chamada da função subtrair", () => {
   service.subtrair = jest.fn();

   service.subtrair();
   expect(service.subtrair).toHaveBeenCalled();
 });