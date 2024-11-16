function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length, n = matrix[0].length;
  let left = 0, right = n - 1, top = 0, bottom = m - 1;
  const res: number[] = [];

  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      res.push(matrix[top][col]);
    }
    top++;

    for (let row = top; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    right--;

    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
    }
  }

  return res;
};