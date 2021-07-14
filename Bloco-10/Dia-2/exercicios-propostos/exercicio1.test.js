const { TestWatcher } = require('jest');
const uppercase = require('./exercicio1');
test('checks callback', (done) => {
  uppercase('thiago', callback => {
    expect(callback).toBe('THIAGO');
    done();
  });
});