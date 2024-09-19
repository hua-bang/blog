function wordPuzzle(grid: string[][], target: string): boolean {
  const m = grid.length,
    n = grid[0].length;
  const visited: boolean[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(false));

  const backtrack = (i: number, j: number, wordIndex: number) => {
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
      backtrack(i + 1, j, wordIndex + 1) ||
      backtrack(i, j + 1, wordIndex + 1) ||
      backtrack(i - 1, j, wordIndex + 1) ||
      backtrack(i, j - 1, wordIndex + 1);

    visited[i][j] = false;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target[0] && backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
