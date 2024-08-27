function wordPuzzle(grid: string[][], target: string): boolean {
  const m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const backtracking = (wordIndex: number, i: number, j: number) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      grid[i][j] !== target[wordIndex]
    ) {
      return false;
    }

    if (wordIndex === target.length - 1) {
      return true;
    }

    visited[i][j] = true;

    const res =
      backtracking(wordIndex + 1, i + 1, j) ||
      backtracking(wordIndex + 1, i, j + 1) ||
      backtracking(wordIndex + 1, i - 1, j) ||
      backtracking(wordIndex + 1, i, j - 1);

    visited[i][j] = false;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target[0] && backtracking(0, i, j)) {
        return true;
      }
    }
  }

  return false;
}

function wordPuzzle(grid: string[][], target: string): boolean {
  const m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(0));

  const backtracking = (wordIndex: number, i: number, j: number) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      grid[i][j] !== target[wordIndex]
    ) {
      return;
    }

    if (wordIndex === target.length - 1) {
      return true;
    }

    visited[i][j] = true;

    const res =
      backtracking(wordIndex + 1, i + 1, j) ||
      backtracking(wordIndex + 1, i, j + 1) ||
      backtracking(wordIndex + 1, i - 1, j) ||
      backtracking(wordIndex + 1, i, j - 1);

    visited[i][j] = false;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target[0] && backtracking(0, i, j)) {
        return true;
      }
    }
  }

  return false;
}
