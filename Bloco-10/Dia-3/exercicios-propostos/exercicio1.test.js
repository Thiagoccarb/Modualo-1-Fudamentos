const service = require('./exercicio1');

test('testing function random', () => {
  service.random = jest
    .fn()
    .mockReturnValue(10);
    service.random();
    expect(service.random).toHaveBeenCalled();
    expect(service.random).toHaveBeenCalledTimes(1);
    expect(service.random()).toBe(10);
});