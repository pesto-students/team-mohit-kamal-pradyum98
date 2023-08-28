const transposeMatrix = (matrix) => {

    let matrixTranspose = new Array(matrix.length);
    for (let k = 0; k < matrix.length; k++) matrixTranspose[k] = new Array(matrix[0].length);
    for(let i = 0; i<matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++) {
            matrixTranspose[i][j] = matrix[j][i];
        }
    }

    return matrixTranspose;
}

console.log(transposeMatrix([[1 ,2] ,[3 ,4]]));