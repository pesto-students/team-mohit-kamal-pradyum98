const fourSum = (array, result) => {
    const set = new Set();
    for(let i = 0;i < array.length ; i ++){
        for(let j= i + 1 ; j< array.length ; j ++){
            let fourthHashSet = new Set();
            let fourth = 0;
            for (let k = j + 1; k < array.length ; k++){
                let sum = array[i]+ array[j] + array[k]
                fourth = result - sum;
                if(fourthHashSet.has(fourth)){
                    temp = [array[i], array[j], array[k], fourth].sort((a, b) => a - b);
                    set.add(temp);
                } else {
                    fourthHashSet.add(array[k]);
                }
            }
        }
    }
    return Array.from(set);
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));