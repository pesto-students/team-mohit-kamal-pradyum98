const lastOccurence = (array, target) => {
    let index = -1;
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] == target) {
            index = mid;
            low = mid + 1;
        }
        if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return index;
};

console.log(lastOccurence([4, 21, 31, 13, 15, 31],4));

