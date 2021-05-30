function returnBiggerIndex(array){
    maior =0;
    for (let index=0; index<array.length;index+=1){
        if(array[index]>maior){
            maior=array[index]
            indexBigger = index;
        }
    }
    return indexBigger;
}    
console.log(returnBiggerIndex([2, 3, 6, 7, 10, 1]));