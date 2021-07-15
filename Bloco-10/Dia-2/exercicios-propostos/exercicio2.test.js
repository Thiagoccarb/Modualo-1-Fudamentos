const { findUserById, getUserName } = require('./exercicio2');

describe('testing wether the promise returns the user and error', () => {
  test('checking an existing id', () => {
    expect.assertions(1);
    return getUserName(4).then(id => {
      expect(id).toBe('Mark');
    });
  });

  test('checking an non-existing id', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => {
      expect(error).toEqual({error: 'User with ' + 6 + ' not found.'});
    });
    });
  });