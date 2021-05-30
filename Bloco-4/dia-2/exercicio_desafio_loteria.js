// Exercicio desafio loteria
let numerosSorteados = [10, 20, 12, 35, 59, 19];
let numerosEscolhidos = [12, 37, 6, 15, 29, 48];
numerosAcertados = [];
let quantidade = 0;
let a=0;
for (let i = 0; i<numerosSorteados.length;i+=1){
  for (let j = 0; j<numerosEscolhidos.length;j+=1){
    if (numerosSorteados[i]===numerosEscolhidos[j]){
       numerosAcertados.push(numerosEscolhidos[j]);
       quantidade +=1;
    }
  }
}  
console.log("números acertados:" + (numerosAcertados);
console.log ("quantidade de acertos:" +(quantidade));

