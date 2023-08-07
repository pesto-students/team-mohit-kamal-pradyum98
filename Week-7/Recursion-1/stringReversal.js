const stringReversal = (string, index, result) => {
    if(index == 0){
        return result;
    }
    return stringReversal(string, index - 1, result + string[index - 1])
};

console.log(stringReversal('hello',5,''));
console.log(stringReversal('racecar', 7, ''));