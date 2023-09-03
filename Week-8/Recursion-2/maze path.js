const mazePathUtil = (rows, columns, answerArray, xIndex, yIndex, traversalString) => {
    if (xIndex < 0 || xIndex > columns - 1 || yIndex < 0 || yIndex > rows - 1) return;
    if (xIndex == rows - 1 && yIndex == columns - 1) {
        answerArray.push(traversalString);
    }
    mazePathUtil(rows, columns, answerArray, xIndex + 1, yIndex, traversalString + 'R');
    mazePathUtil(rows, columns, answerArray, xIndex, yIndex + 1, traversalString + 'D');
};

const mazePath = (rows, columns) => {
    const answerArray = [];
    mazePathUtil(rows, columns, answerArray, 0, 0, '');
    return answerArray;
};

console.log(mazePath(3, 3));
console.log(mazePath(2, 2));
