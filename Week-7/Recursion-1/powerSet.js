const powerSet = (array, index, result) => {
    const powerSetArray = [];
    if (index == array.length) {
        return result;
    }
    powerSetArray.push(powerSet(array, index + 1, result + array[index]));
    powerSetArray.push(powerSet(array, index + 1, result));
    return powerSetArray.flat();
};

console.log(powerSet([1,2,3],0, []));