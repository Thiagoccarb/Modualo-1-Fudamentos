//exercicio 1
//let a = 10;
//let b = 5;
//console.log('Soma: ' + (a + b));
//console.log('Subtração: ' + (a - b));
//console.log('Multiplicação: ' + (a * b));
//console.log('Divisão: ' + (a / b));
//console.log('Módulo: ' + (a % b));

//exercicio 2
//let a = 20;
//let b = 21;
//if (a > b) {
//  console.log("'a' é maior que 'b'");
//} else {
//  console.log("'b' é maior que 'a'");
//};

//exercicio 3
//let a = 3;
//let b = 2;
//let c = 1;
//if (a>b && a>c){
//    console.log("o mior número é 'a'")
//}elese if (b>c && b>a){
//    console.log("o mior número é 'b'")
//}else {
//    console.log("o mior número é 'c'")
//}

//exercicio 4
//let number = 4;
//if (number > 0) {
//  console.log('positive');
//} else if (number < 0) {
//  console.log('negative');
//} else {
//  console.log('zero');
//};

//exercicio 5
//let degreeAngleA = 65;
//let degreeAngleB = 100;
//let degreeAngleC = 15;
//let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;
//let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;
//if(allAnglesArePositives){
//  if (sumOfAngles === 180) {
//    console.log(true);
//  } else {
//    console.log(false);
//  };
//} else {
// console.log('Erro: ângulo inválido');
//}

//exercicio 6
//let chessPiece = 'bishop';
//let chessPieceLower = chessPiece.toLowerCase();
//switch (chessPieceLower){
//    case 'king':
//        console.log( 'king: one move to any direction');
//        break;
//    case 'tower':
//        console.log ('Tower: only straight moves');
//        break;
//   case 'queen':
//        console.log('Queen: move to any direction');
//        break;
//    case 'knight':
//        console.log('knight: L move');
//        break;
//    case 'bishop':
//        console.log('bishop: diagonal moves');
//        break;
//    case 'pawn':
//        console.log('pawn:only one straight move or 2 straight moves in the fisrt time');
//        break;                         
//}

//exercicio 7
//let grade = 76;
//if (grade < 0 || grade > 100) {
//  console.log("Erro, nota incorreta!");
//} else if (grade >= 90) {
//  console.log("A");
//} else if (grade >= 80) {
//  console.log("B");
//} else if (grade >= 70) {
//  console.log("C");
//} else if (grade >= 60) {
//  console.log("D");
//} else if (grade >= 50) {
//  console.log("E");
//} else {
//  console.log("F");
//}

//exercicio 8
//let a = 1;
//let b = 3;
//let c = 5;
//let isEven = false;
//if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//  isEven = true;
//};
//console.log(isEven);

//exercicio 9
//let a = 1;
//let b = 3;
//let c = 5;
//let isOdd = false;
//if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//  isOdd = true;
//};
//console.log(isOdd);

//exercicio 10
//let costOfProduct = 1;
//let saleValue = 3;
//if (costOfProduct >= 0 && saleValue >= 0) {
//  let totalCostOfProduct = costOfProduct * 1.2;
//  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
//  console.log(totalProfit);
//} else {
//  console.log("Error, os valores não podem ser negativos");
//};

//exercicio 11
//et aliquotINSS;
//let aliquotIR;
//let grossSalary = 2000.00;
//if (grossSalary <= 1556.94) {
//  aliquotINSS = grossSalary * 0.08;
//} else if (grossSalary <= 2594.92) {
//  aliquotINSS = grossSalary * 0.09;
//} else if (grossSalary <= 5189.82) {
//  aliquotINSS = grossSalary * 0.11;
//} else {
//  aliquotINSS = 570.88;
//}
//let baseSalary = grossSalary - aliquotINSS;
//if (baseSalary <= 1903.98) {
//  aliquotIR = 0;
//} else if (baseSalary <= 2826.65) {
//  aliquotIR = (baseSalary * 0.075) - 142.80;
//} else if (baseSalary <= 3751.05) {
//  aliquotIR = (baseSalary * 0.15) - 354.80;
//} else if (baseSalary <= 4664.68) {
//  aliquotIR = (baseSalary * 0.225) - 636.13;
//} else {
 // aliquotIR = (baseSalary * 0.275) - 869.36;
//};
//console.log("Salário: " + (baseSalary - aliquotIR));