const longestVowelConsonentSubArray = (string) => {
    let prefixSumArray = [];
    const map = new Map();
    let maxLength = 0;
    let sum = 0;
    for(let i = 0 ;i< string.length ; i++){
        prefixSumArray[i] = ['a','e','i','o','u'].includes(string[i].toLowerCase()) ? 1 : -1;
    }
    console.log(prefixSumArray, 'prefixSumArray');
    for (let i = 0; i < prefixSumArray.length; i++) {
        sum += prefixSumArray[i];

        if (sum == 0) {
            maxLength = i + 1;
            endIndex = i;
        }

        if (map.has(sum)) {
            if (i - (map.get(sum) + 1) > maxLength) {
                maxLength = i - (map.get(sum) + 1);
                endIndex = i;
            } else {
                map.set(sum, i);
            }
        }
    }

    return maxLength;
}

console.log(longestVowelConsonentSubArray('abcdeiouiop'));
console.log(longestVowelConsonentSubArray('aeiouAEIOU'));

