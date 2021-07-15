// Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findByAge = Animals.find((animal) => animal.age === age);
      if (findByAge) return resolve(findByAge);
      return reject('idade não encontrada');
    }, 2000);
  });
};

const getAge = (age => {
  return findByAge(age).then((data) => data);
});

module.exports = { findByAge, getAge };