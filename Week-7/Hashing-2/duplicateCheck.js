const duplicateCheck = (array) => {
    const set = new Set();

    for (let i of array) {
        if (set.has(i)) {
            return false;
        }
        set.add(i);
    }
    return true;
};

console.log(duplicateCheck([1, 2, 3, 4, 5, 1]));
console.log(duplicateCheck([1, 2, 3, 4, 5]));
