//Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = (frase) => {
  let palavras = frase.trim().split(' ');
  let maior = 0;
  let nome = '';
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > maior){
      maior = palavras[i].length;
      nome = palavras[i];
    }
  }
  return nome;
}
console.log(`A maior palavra é ${maiorPalavra("   aaaaaa bbbbbbbbbb ccccccccccccccccccccccccd dddddddddddddddddddddddddddddddddddddddd")}`);