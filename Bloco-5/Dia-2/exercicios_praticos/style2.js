//exercicio 1
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');//referencia
let brother = document.createElement('div');//criou elemento
brother.id ="aaaaa";//crioi id
let parent = elementoOndeVoceEsta.parentElement;//referenciou elemento pai
parent.appendChild(brother) //insere html...


//exercicio 2
let child = document.createElement('div');
child.id = 'bbbbbb'
elementoOndeVoceEsta.appendChild(child)

//exercicio 3
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let primeiroFilhoDoFilhoChild = document.createElement('div');
primeiroFilhoDoFilhoChild.id = "ccccccc";
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoChild);
