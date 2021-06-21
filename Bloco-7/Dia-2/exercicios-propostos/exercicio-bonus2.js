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

const studentsNumber = (obj, key) => {
  const keys = Object.keys(obj);
  let materias = '';
  let estudantes = 0;
  let turnos = '';
  for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    if (obj[element].professor === key) {
      materias += `${obj[element].materia}, `;
      estudantes += obj[element].numeroEstudantes;
      turnos += `${obj[element].turno}, `;
    }
  }
  return `materias: ${materias}
estudantes: ${estudantes}
turnos: ${turnos}`
}

console.log(studentsNumber(allLessons, "Maria Clara"));