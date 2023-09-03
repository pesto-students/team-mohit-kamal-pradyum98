const countingSort = (numArray) => {
    const maxVal = Math.max(...numArray);
    const minVal = Math.min(...numArray);

    const countArray = new Array(maxVal - minVal + 1).fill(0);

    for(let num of numArray){
        countArray[num -  minVal]++;
    }

    let sortedArray = [];
    for(let i = 0 ; i < countArray.length ; i ++){
        while(countArray[i] > 0){
            sortedArray.push(i + minVal);
            countArray[i]--;
        }
    }

    return sortedArray;
}

console.log(countingSort([9, 5, 3, 7, 1]));
console.log(countingSort([10, 3, 6, 2, 9]));