// Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (nome => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const findAnimal = Animals.find((animal => animal.name === nome));
      if (findAnimal) {
        return resolve(findAnimal);
      } else {
        const msg = 'Nenhum animal com esse nome!';
        return reject(msg);
      }
    }, 100);
  });
});

const getAnimal = (name) => {
 return findAnimalByName(name).then(obj => obj);
};

module.exports = {findAnimalByName, getAnimal};

