let array= [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let arraySort = [];
for (i=0;i<array.length;i+=2){
    for (j=1;j<i;j+=1){
        if (array[i]>array[j]){
            arraySort.push(array[j]);
            arraySort.push(array[i]);
        }
    }
}
console.log(arraySort);
     