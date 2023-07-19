const sumOfMatrix = async ( matrix1, matrix2) => {
    if (matrix1.length !== matrix2.length) {
        throw new Error('Arrays must have the same dimensions');
    }
    let matrixSum = new Array(matrix1.length);
    for (let k = 0; k < matrix1.length; k++) matrixSum[k] = new Array(matrix1[0].length);
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return matrixSum;
};

console.log(
    sumOfMatrix(
        [
            [1, 2, 3],
            [4, 5, 6]
        ],
        [
            [7, 8, 9],
            [10, 11, 12]
        ]
    )
);