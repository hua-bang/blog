function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length,
    n = matrix[0].length;
  let col = n - 1,
    row = 0;

  while (0 <= col && col < n && 0 <= row && row < m) {
    const val = matrix[row][col];
    if (val === target) {
      return true;
    }
    if (val < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
}
