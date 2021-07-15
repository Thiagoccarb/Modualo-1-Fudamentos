const { findUserById, getUserName } = require('./exercicio3');

describe('testing wether the promise returns the user and error by using async/await method', () => {
  test('checking an existing id', async () => {
    const checkId = await getUserName(4);
    expect(checkId).toBe('Mark');
  });

  test('checking an non-existing id', async () => {
    try {
      await getUserName(6);
    } catch(error) {
      expect(error).toEqual({ error: 'User with ' + 6 + ' not found.' });
    }
  });
});