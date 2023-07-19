const twoSum = (array, sum) => {
    const pairMap = new Set();
    const sumPairArray = [];
    array.forEach((e) => {
        if (pairMap.has(sum - e)) {
            sumPairArray.push([sum - e, e]);
        }
        pairMap.add(e);
    });
    return sumPairArray;
};

console.log(twoSum([2, 4, 6, 8, 10], 12));
console.log(twoSum([1, 1, 1, 1, 1], 2));
