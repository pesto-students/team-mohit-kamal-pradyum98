const floodFillUtil = (matrix , xIndex, yIndex, prevVal, newVal) => {
    if (xIndex < 0 || xIndex > (matrix[0].length - 1) || yIndex < 0 || yIndex > (matrix.length - 1)) return;
    if ( matrix[xIndex][yIndex] !== prevVal) return;

    matrix[xIndex][yIndex] = newVal;
    floodFillUtil(matrix, xIndex + 1, yIndex, prevVal, newVal);
    floodFillUtil(matrix, xIndex - 1, yIndex, prevVal, newVal);
    floodFillUtil(matrix, xIndex, yIndex + 1, prevVal, newVal);
    floodFillUtil(matrix, xIndex , yIndex - 1, prevVal, newVal);
}

const floodFill = (matrix, newVal , xindex, yIndex) => {
    const prevVal = matrix[xindex][yIndex];
    floodFillUtil(matrix, xindex, yIndex, prevVal, newVal);
    return matrix;
};

console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ],
        3,
        0,
        0
    )
);

console.log(
    floodFill(
        [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1],
            [1, 2, 2, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 2, 2, 0],
            [1, 1, 1, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1]
        ],
        3,
        4,
        4
    )
);