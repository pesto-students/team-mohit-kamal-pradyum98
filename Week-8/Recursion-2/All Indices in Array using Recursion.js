const targetIndices = (array, target, index, indiceArray) => {
    if(index > array.length - 1){
        return indiceArray;
    }
    if(array[index] == target){
         indiceArray.push(index);
    }
    return targetIndices(array, target, index + 1, indiceArray);
}

console.log(targetIndices([1, 2, 3, 2, 4, 2, 5], 2, 0, []));
console.log(targetIndices([1, 1, 1, 1, 1], 1, 0, []));