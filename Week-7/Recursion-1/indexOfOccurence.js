const indexOfOccurence = (array, target, index) => {
    if(index > array.length){
        return -1;
    }
    if(array[index] == target){
        return index;
    }
    return indexOfOccurence(array, target, index + 1);
}

console.log(indexOfOccurence([1 ,2 ,3 ,4 ,5, 11,22,90,53], 53, 0))
