const arraySum = (array) => {
    if(!array.length){
        return 0;
    }
    
    return array[0] + arraySum(array.slice(1))
}

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([0, 0, 0, 0, 0]));