const newHired = (nome) => {
  const id = {
    nomeCompleto: nome,
    email: `${nome.split(' ').join('')}@trybe.com`,
  }
  return id;
}

const newEmployees = () => {
  const employees = {
    id1: newHired('Pedro Guerra'),
    id2: newHired('Luiza Drumond'),
    id3: newHired('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees())