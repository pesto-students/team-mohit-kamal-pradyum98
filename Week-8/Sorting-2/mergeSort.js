const merge = (leftarray, rightarray) => {
    let leftindex = 0;
    let rightindex = 0;
    const result = [];
    while(leftindex < leftarray.length && rightindex < rightarray.length){
        if(leftarray[leftindex] < rightarray[rightindex]){
            result.push(leftarray[leftindex]);
            leftindex++;
        } else {
            result.push(rightarray[rightindex]);
            rightindex++;
        }
    }

    return result.concat(leftarray.slice(leftindex)).concat(rightarray.slice(rightindex))
}

const mergeSort = (array) => {
    if(array.length <= 1){
        return array;
    }
    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));