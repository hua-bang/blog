function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const dfs = (preStr: string, i: number, j: number) => {
    if (preStr === word) {
      return true;
    }
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
      return false;
    }
    const wordIndex = preStr.length;

    if (board[i][j] !== word[wordIndex]) {
      return false;
    }

    visited[i][j] = true;
    const val = preStr + board[i][j]
    const res = dfs(val, i + 1, j) || dfs(val, i - 1, j) || dfs(val, i, j - 1) || dfs(val, i, j + 1);
    visited[i][j] = false;
    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs('', i, j)) {
        return true;
      }
    }
  }

  return false;
};