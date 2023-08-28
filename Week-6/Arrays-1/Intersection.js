const arrayIntersection = (array1, array2) => {
    const array1Set = new Set(array1);
    const intersectionArray = [];
    array2.forEach((e) => {
        if (array1Set.has(e)){
            intersectionArray.push(e);
        }
    })
    return intersectionArray;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));