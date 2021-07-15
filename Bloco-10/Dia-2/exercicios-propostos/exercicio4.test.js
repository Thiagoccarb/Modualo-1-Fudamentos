const getRepos = require('./exercicio4');
const fetch = require('./exercicio4');
describe ('testing a promise', ()=> {
  test ('testing if sd-01-week4-5-project-todo-list is within the array', async () => {
    const data = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(data).toContain('sd-01-week4-5-project-todo-list');
  });
});