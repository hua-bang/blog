function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length;
  let col = n - 1, row = 0;
  while (col >= 0 && row < m) {
    const value = matrix[row][col];
    if (value === target) {
      return true;
    }

    if (value < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};