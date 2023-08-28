const isTargetPresent = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] == target) {
            return true;
        }
        if (array[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};

console.log(isTargetPresent([4, 21, 31, 13, 15, 31], 44));
