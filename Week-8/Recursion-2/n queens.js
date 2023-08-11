const answers = [];
const isSafe = (row, col, board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i][col] == 'Q') return false;
    }
    let i = row;
    let j = col;
    while (i >= 0 && j >= 0) if (board[i--][j--] == 'Q') return false;
    i = row;
    j = col;
    while (i >= 0 && j < board.length) if (board[i--][j++] == 'Q') return false;
    return true;
};

const nQueensUtil = (board, row) => {
    if (row == board.length) {
        answers.push([...board]);
    }
    for (let i = 0; i < board.length; i++) {
        if (isSafe(row, i, board)) {
            board[row] = board[row].substring(0, i) + 'Q' + board[row].substring(i + 1);
            nQueensUtil(board, row + 1);
            board[row] = board[row].substring(0, i) + '-' + board[row].substring(i + 1);
        }
    }
};

const nQueens = (dimensions) => {
    const board = new Array(dimensions).fill(new Array(dimensions).fill('-').join(''));
    nQueensUtil(board, 0);
    const queenCoordinates = answers.map((row) => {
        return row.map((position) => {
            const columnIndex = position.indexOf('Q');
            if (columnIndex !== -1) {
                return [answers.indexOf(row), columnIndex];
            }
            return null;
        });
    });
    return queenCoordinates;
};

console.log(nQueens(4));

