const fetch = require('node-fetch');

const getRepos = async (url) => {
  const request = await fetch(url);
  const data = await (response => response.json())
  const map = await (data => data.map((repo) => repo.name));
  return map;
};

module.exports = getRepos;