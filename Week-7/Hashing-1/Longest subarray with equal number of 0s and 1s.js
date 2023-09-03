const longestZeroOneSubarray = (array) => {
    const map = new Map();
    let maxLength = 0;
    let endIndex = -1;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] == 0 ? -1 : 1;
    }
    for (let i = 0; i < array.length; i++) {
        sum+= array[i];

        if(sum == 0){
            maxLength = i + 1;
            endIndex = i;
        }

        if(map.has(sum)){
            if(i - (map.get(sum) + 1) > maxLength){
                maxLength = i - (map.get(sum) + 1);
                endIndex = i
            } else {
                map.set(sum , i)
            }
        }
    }

    return maxLength;
};

console.log(longestZeroOneSubarray([0, 0, 1, 1, 0, 1, 0, 0, 1]));