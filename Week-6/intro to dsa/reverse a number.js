const reverseNumber = (number) => {
    return parseInt(number.toString().split('').reverse().join(''));
}

console.log(reverseNumber(12345));
console.log(reverseNumber(100));