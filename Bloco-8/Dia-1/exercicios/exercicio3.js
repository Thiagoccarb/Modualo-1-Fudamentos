const points = (gabarito, respostas, checkAnswers) => {
  let counter = 0;
  for (let i = 0; i < gabarito.length; i++) {
    counter += checkAnswers(gabarito[i],respostas[i]);
  }
  return counter;
}

const checkAnswers = (param1, param2) => {
  if (param2 === param1) {
    return 1;
  }
  if (param2 === 'N.A') {
    return 0;
  }
  return -1;
}

console.log(points(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkAnswers));
                                                                      