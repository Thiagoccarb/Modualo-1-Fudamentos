//removendo primeiroFilho
let primeiroFilho = document.getElementById('primeiroFilho');
let pai = document.getElementById('pai');
pai.removeChild(primeiroFilho);

//removendo segundoEUltimoFilhoDoFilho
let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.removeChild(segundoEUltimoFilhoDoFilho);

//removendo terceiroFilho
let terceiroFilho = document.getElementById('terceiroFilho');
pai.removeChild(terceiroFilho);

//removendo quartoEUltimoFilho
let quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho');
pai.removeChild(quartoEUltimoFilho);
