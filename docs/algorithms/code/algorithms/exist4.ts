function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length;
  const visited = new Array(m).fill(1).map(() => new Array(n).fill(false));

  const dfs = (prefix: string, i: number, j: number) => {
    if (prefix === word) {
      return true;
    }

    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
      return false;
    }

    const nextIndex = prefix.length;

    if (board[i][j] !== word[nextIndex]) {
      return false;
    }

    visited[i][j] = true;
    const nextVal = prefix + board[i][j];
    const res = dfs(nextVal, i + 1, j) || dfs(nextVal, i - 1, j) || dfs(nextVal, i, j + 1) || dfs(nextVal, i, j - 1);
    visited[i][j] = false;
    return res;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs('', i, j)) {
        return true;
      }
    }
  }

  return false;
};