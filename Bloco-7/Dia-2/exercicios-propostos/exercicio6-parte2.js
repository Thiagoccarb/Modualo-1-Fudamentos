const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const a = {};
const allLessons = Object.assign(a, { lesson1, lesson2, lesson3 });

// const countStudens = (obj) => {
//   let total = 0;
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     const element = keys[i];
//     total += obj[element].numeroEstudantes;
//   }
//   return total;
// }

// console.log(countStudens(allLessons));

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes; // array[index] must be in dot notation
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));