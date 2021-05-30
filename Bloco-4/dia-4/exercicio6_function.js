function somaNumeros (num){
soma=0;
  for (i=1;i<=num;i+=1){
    soma += i;
  }
return soma;
}
console.log(somaNumeros(5));