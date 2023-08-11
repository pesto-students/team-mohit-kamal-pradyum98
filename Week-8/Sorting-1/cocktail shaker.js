const countVowels = (string) => {
    let count = 0;
    for(let i = 0 ; i< string.length ; i ++){
        if ("AEIOUaeiou".includes(string[i])) count++;
    }
    return count;
}

const cockTailShaker = (stringarray) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < stringarray.length -1 ; i++) {
            if (countVowels(stringarray[i]) > countVowels(stringarray[i + 1])) {
                const temp = stringarray[i];
                stringarray[i] = stringarray[i+1];
                stringarray[i+1] = temp;
                swapped = true;
            }
        }

        if(!swapped){
            break;
        }
        swapped = false;
        for(let i = stringarray.length - 2 ; i >=0 ; i--){
            if(countVowels(stringarray[i]) > countVowels(stringarray[i+1])){
                const temp = stringarray[i];
                stringarray[i] = stringarray[i + 1];
                stringarray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return stringarray;
}

console.log(cockTailShaker(["apple", "banana", "pear", "orange", "kiwi"]));