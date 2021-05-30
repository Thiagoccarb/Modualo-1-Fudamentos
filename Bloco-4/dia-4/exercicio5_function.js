function mostRepeated(array){
    let item = '';
    let counter=0;
    maxCounter=0;
    for (let i=0; i<array.length; i+=1){
        for (let j=1;j<array.length; j+=1){
            if (array[i]===array[j]){
                counter +=1;
                if (counter > maxCounter) {
                    maxCounter=counter;
                    item = array[i];
                } 

            }
        }
    counter=0;    
    }
return item;    
}

console.log(mostRepeated([2, 3, 2,5, 5, 5, 5, 8, 2, 3]));