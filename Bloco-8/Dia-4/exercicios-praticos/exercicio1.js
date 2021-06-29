const findBiggest = () => {
  const numbers = [50, 85, -30, 3, 15];
  let maiorValor;
  for (let i = 0; i < numbers.length; i += 1) {
    let element = numbers[i];
    if (!maiorValor || element > maiorValor) {
      maiorValor = element;
    }
  }
  return maiorValor;
}

// console.log(findBiggest());

// faça uma função que some todos os números pares do array:

const sumEven = () => {
  const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
  return numbers.filter((number) => (number % 2 === 0)).reduce((sum, number) => (sum + number));
}

// console.log(sumEven());


// Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];


// const studentBestGrade1 = () => {
//   const obj = estudantes.map((student) => ({
//     estudante: estudantes.nome,
//     melhor_materia: estudantes.materias.reduce((acc, element) => {
//       if (acc.nota > element.nota) return acc;
//       return element;
//     })
//   }))
// }

// console.log(studentBestGrade1())


  const getBestClass = (acc, materia) => {
    if (acc.nota > materia.nota) return acc;
    return materia;
  };

  const reportBetter = (students) => students.map((student) => ({
    name: student.nome,
    nota: student.materias.reduce((acc, materia)=> {
      if (acc.nota > materia.nota) return acc;
    return materia;
    })
  }.nota));

  console.log(reportBetter(estudantes));