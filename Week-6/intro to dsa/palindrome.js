const isPalindrome = (input) => {
    const numberToString = input.toString();
    let j = numberToString.length - 1;
    for (let k = 0; k < numberToString.length / 2; k++) {
        if (numberToString[k] !== numberToString[j]) {
            return false;
        }
        j--;
    }
    return true;
};

console.log(isPalindrome(12321));
console.log(isPalindrome(12345));
