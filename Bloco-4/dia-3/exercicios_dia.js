//exercicio 1
//let n =5;
//let contColuna = ""
//let simbolo = "*"
//for(let i =0; i<=5; i+=1) {
//  contColuna = contColuna + simbolo;
//}
//for (let i =0; i<=5; i+=1) {
//console.log(contColuna);
//}

//exercicio 2
//let n =5;
//let contColuna = ""
//let simbolo = "*"
//for(let i =0; i<=5; i+=1) {
// contColuna = contColuna + simbolo;
//        console.log(contColuna);  
//}

//exercicio 3
let n =5;
let setLine = "";
let simbolo = "*";
let setColumn = n;
for (let lineIndex =0; lineIndex <=5; lineIndex+=1){
    for (columnIndex =0; columnIndex<=5;columnIndex+=1){
        if (columnIndex<setColumn) {
            setLine =setLine + " ";
        }else { (setLine = setLine+simbolo);
       }    
    } 
    console.log(setLine);
    setColumn -=1;
    setLine="";
}

//exercicio 4
//let n =5;
//let setLine = "";
//let simbolo = "*";
//let center = (n+1)/2;
//let columnRight = center;
//let columnLeft = center;
//for (let lineIndex =0; lineIndex <=center; lineIndex+=1){
//    for (columnIndex =0; columnIndex<=5;columnIndex+=1){
//        if (columnIndex>columnLeft && columnIndex<columnRight) {
//            (setLine = setLine+simbolo);
//        }else { setLine=setLine + " ";
//       }    
//    } 
//    console.log(setLine);
//   setLine = "";
//    columnRight +=1;
//   columnLeft-=1
//};

//exercicio 5
//let numero = 4;
//let somaDivisores = 0;
//for (let i=1;i<=numero; i+=1){
//    if (numero%i===0){
//        somaDivisores = somaDivisores+1;   
//    }
//}
//if (somaDivisores > 2) console.log("número não é primo");
//gitelse console.log ("número primo");
