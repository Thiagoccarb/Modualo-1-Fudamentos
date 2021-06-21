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

const studentsNumber = (obj) => {
  const keys = Object.keys(obj);
  console.log(keys);
  total = 0;
  for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    if (obj[element].materia === 'Matemática') {
      total += obj[element].numeroEstudantes;
    }
  }
  return total;
}

console.log(studentsNumber(allLessons));