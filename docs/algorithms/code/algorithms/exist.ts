function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const dfs = (str: string, i: number, j: number) => {
    if(str === word) {
      return true;
    }

    if(str.length >= word.length) {
      return false;
    }

    if(i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
      return false;
    }

    visited[i][j] = true;
    const nextStr = str + board[i][j];
    const res = dfs(nextStr, i + 1, j) || dfs(nextStr, i - 1, j) || dfs(nextStr, i, j + 1) || dfs(nextStr, i, j - 1);

    visited[i][j] = false;
    return res;
  };

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && dfs("", i, j)) {
        return true;
      }
    }
  }

  return false; 
};