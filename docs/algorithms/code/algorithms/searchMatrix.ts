function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length,
    n = matrix[0].length;

  let col = n - 1,
    row = 0;

  while (row >= 0 && row < m && col >= 0 && col < n) {
    const currVal = matrix[row][col];
    if (currVal === target) {
      return true;
    }

    if (currVal > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}
