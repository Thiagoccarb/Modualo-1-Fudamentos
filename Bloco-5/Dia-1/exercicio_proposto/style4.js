//Exercicio 1
function modifyParagraph(text) {
   let a = document.getElementsByTagName('p')[1].innerHTML = text;
    return text;
}

modifyParagraph('aaaaaaa');

//Exercicio 2
function modifyColor (color){
    let b = document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
    return color;
}

modifyColor('black');

//Exercicio 3
function modifyColorCenter (color){
    let c = document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
    return color;
}

modifyColorCenter('green');

//Exercicio 4
function modifyH1 (text){
    let d = document.getElementsByTagName('h1')[0].innerText =text;


    return text;
}
modifyH1('tttttt');

//Exercicio 5
function modifyH1UpperCase (){
    document.getElementsByTagName('p')[0].innerText = document.getElementsByTagName('p')[0].innerText.toLocaleUpperCase();
}    
modifyH1UpperCase();

//Exercicio 6
function displayConsole (){
    let p = document.getElementsByTagName('p');
    for (let index = 0; index < p.length; index++) {
         console.log(p[index].innerHTML);
    }
 }    
displayConsole();