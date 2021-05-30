function biggestName (array){
    let maiorNome = array[0];
    for(index in array){
        if (maiorNome.length < array[index].length){
            maiorNome = array[index];
        }
    }    
    return maiorNome;
}    
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));