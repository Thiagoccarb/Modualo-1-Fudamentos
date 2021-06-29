const assert = require('assert');
const { Cipher } = require('crypto');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];

// crie um objeto com o nome de cada jogador e e-mail

const a =  players.reduce((acc, element) => {
  console.log('accumulator:', acc, 'currentValue:', element)
    acc[element.fullName] = element.email;
      return acc;
  }, {});

console.log(a);


// const newPlayers = players.reduce((accumulator, currentValue) => {
//   console.log('accumulator:', accumulator, 'currentValue:', currentValue);
//   accumulator[currentValue.fullName] = currentValue.email;
//   return accumulator;
// },{});

// console.log(newPlayers);

//Testes
const expectedValues = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Marta Vieira da Silva': 'rainhamarta@futebol.br'
};

//assert.deepStrictEqual(newPlayers, expectedValues); 