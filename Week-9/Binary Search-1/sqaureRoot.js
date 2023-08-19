const findSqrt = (N) => {
    let low = 0;
    let high = N;

    while (low <= high) {
        const middle = (low + high) / 2;
        const square = middle * middle;

        if (square <= N) {
            low = middle + 1e-9;
        } else {
            high = middle - 1e-9;
        }
    }
    return low - 1e-9;
};

console.log(findSqrt(26));
