function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length;
  let row = 0, col = n - 1;

  while(row >= 0 && row < m && col >= 0 && col < n) {
    const val = matrix[row][col];
    if(val === target) {
      return true;
    }

    if(val < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};