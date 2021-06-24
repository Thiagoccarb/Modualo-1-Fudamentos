const checkNumber = (param1, param2) => {
  if (param1 === param2) {
    return 'Parabens, você ganhou!';
  }
  return 'Tente novamente';
}
                       3 
const DrawResult = (number, checkNumber) => {
  const result = Math.round(Math.random() * (5));
  return checkNumber(number, result);
}                       
DrawResult(3,checkNumber);