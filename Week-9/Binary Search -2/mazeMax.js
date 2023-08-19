const mazeMax = (maze) => {
    const rows = maze.length;
    const cols = maze[0].length;

    const dp = new Array(rows).fill(null).map(() => new Array(cols).fill(-1));

    function dfs(row, col) {
        if (row >= rows || col >= cols) {
            return 0;
        }

        if (row === rows - 1 && col === cols - 1) {
            return maze[row][col];
        }

        if (dp[row][col] !== -1) {
            return dp[row][col];
        }

        dp[row][col] = maze[row][col] + Math.max(dfs(row, col + 1), dfs(row + 1, col));

        return dp[row][col];
    }

    return dfs(0, 0);
};

console.log(
    mazeMax([
        [1, 3, 10],
        [1, 5, 4],
        [5, 0, 1]
    ])
);
