function wordPuzzle(grid: string[][], target: string): boolean {
  let m: number = grid.length,
    n: number = grid[0].length;

  const used = new Array(m).fill(0).map((_) => new Array(n).fill(false));

  const backTracking = (idx: number, i: number, j: number) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      idx >= target.length ||
      used[i][j] ||
      grid[i][j] !== target[idx]
    ) {
      return false;
    }

    if (idx === target.length - 1) {
      return true;
    }

    used[i][j] = true;

    const res =
      backTracking(idx + 1, i - 1, j) ||
      backTracking(idx + 1, i + 1, j) ||
      backTracking(idx + 1, i, j - 1) ||
      backTracking(idx + 1, i, j + 1);

    used[i][j] = false;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target[0] && backTracking(0, i, j)) {
        return true;
      }
    }
  }

  return false;
}

function wordPuzzle(grid: string[][], target: string): boolean {
  let m = grid.length,
    n = grid[0].length;
  const visited = new Array(m).fill(0).map(() => {
    return new Array(n).fill(false);
  });

  const backTracking = (wordIndex: number, i: number, j: number) => {
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
      backTracking(wordIndex + 1, i - 1, j) ||
      backTracking(wordIndex + 1, i + 1, j) ||
      backTracking(wordIndex + 1, i, j + 1) ||
      backTracking(wordIndex + 1, i, j - 1);

    visited[i][j] = false;

    return res;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === target[0] && backTracking(0, i, j)) {
        return true;
      }
    }
  }

  return false;
}
