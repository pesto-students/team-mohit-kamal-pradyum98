const oldKeyNewKey = (array, oldKey, newKey) => {
    const updatedArray = array.map((e) => (e == oldKey ? newKey : e));
    return updatedArray;
};

console.log(oldKeyNewKey([1, 2, 3, 2, 4, 2, 5], 2, 6));
console.log(oldKeyNewKey([5, 5, 5, 5], 5, 2));
