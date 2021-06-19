// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
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

const obj = Object.entries(lesson1);

const checkPair = (obj, key, value) => {
  const array = Object.entries(obj);
  for (const i in array) {
    if (array[i][0] === key && array[i][1] === value) {
      return true;
    }
  }
};

console.log(checkPair(lesson1, 'materia', 'Matemática' ));