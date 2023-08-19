const matrixSearch = (matrix, target) => {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let low = 0;
    let high = rows*cols - 1;

    while (low <= high) {
        const mid = Math.floor((low+high)/2);
        const midElement = matrix[Math.floor(mid/cols)][mid%cols];
        if(midElement == target){
            return true;
        }

        if(midElement > target){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return false;
}

console.log(
    matrixSearch([
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ], 11)
);