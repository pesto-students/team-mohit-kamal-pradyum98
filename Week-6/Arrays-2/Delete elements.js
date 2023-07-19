const deleteElements = (array) => {
    return array.filter((e) => !(e % 2 == 0 && e % 3 == 0));
};

console.log(deleteElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(deleteElements([9, 12, 15, 18, 21]));