const verifyCallbackJest = setTimeout(() => {
  expect(10).toBe(5);
  console.log('Deveria falhar!')
  done();
}, 500);

module.exports = verifyCallbackJest;