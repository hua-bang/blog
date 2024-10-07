function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const m = matrix.length,
    n = matrix[0].length;

  let left = 0,
    top = 0,
    right = n - 1,
    bottom = m - 1;

  while (left <= right || top <= bottom) {
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }

    if (!(left < right && top < bottom)) {
      continue;
    }
    for (let col = right - 1; col > left; col--) {
      res.push(matrix[bottom][col]);
    }
    for (let row = bottom; row > top; row--) {
      res.push(matrix[row][left]);
    }

    [left, top, right, bottom] = [left + 1, top + 1, right - 1, bottom - 1];
  }

  return res;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
