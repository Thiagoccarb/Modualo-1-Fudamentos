const { findByAge, getAge } = require('./exercicio6');

describe('testing exercise 6 - promise', () => {
  test('passing an existing age', () => {
    expect.assertions(1);
    return getAge(1).then((animal) => {
      expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
    });
  });
  test('passing a non-existing age to check error', ()=>{
    expect.assertions(1);
    return getAge(6).catch((error)=>{
      expect(error).toBe('idade não encontrada');
    });
  });
});