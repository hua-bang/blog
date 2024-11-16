/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const matrixNew = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrixNew[j][n - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrixNew[i][j];
    }
  }
};