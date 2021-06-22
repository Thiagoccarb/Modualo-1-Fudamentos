const greetPeople = (people) => {
  let greeting = 'Hello';
  for (let i = 0; i < people.length; i++) {
    people.splice(i, 1, `${greeting} ${people[i]}`);
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');

assert.strictEqual(greetPeople(parameter), result);
assert.strictEqual(Array.isArray(greetPeople(parameter)), true);