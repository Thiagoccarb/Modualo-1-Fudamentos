function returnLowestIndex(array){
    menor =array[0];
    for (let index=0; index<array.length;index+=1){
        if(array[index]<menor){
            menor=array[index]
            lowestIndex = index;
        }
    }
    return lowestIndex;
}    
console.log(returnLowestIndex([2, 4, 6, 7, 10, 0, -3]));