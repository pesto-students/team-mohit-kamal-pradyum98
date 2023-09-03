const quickSort = (array) => {
    if(array.length <= 1){
        return array;
    }
    const left = [];
    const right = [];
    const pivot = array[Math.floor(array.length/2)];
    for(let num of array){
        if(num > pivot){
            left.push(num);
        } else if( num < pivot) {
            right.push(num);
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];
};

console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
