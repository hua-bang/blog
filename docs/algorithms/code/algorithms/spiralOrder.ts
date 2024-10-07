function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = [];
  const m = matrix.length,
    n = matrix[0].length;

  let left = 0,
    top = 0,
    bottom = m - 1,
    right = n - 1;

  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) {
      break;
    }

    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) {
      break;
    }

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    if (top > --bottom) {
      break;
    }

    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) {
      break;
    }
  }

  return res;
}
