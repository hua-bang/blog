/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const cols: number[] = [],
    rows: number[] = [];

  const m = matrix.length,
    n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let row of rows) {
    for (let i = 0; i < n; i++) {
      matrix[row][i] = 0;
    }
  }

  for (let col of cols) {
    for (let i = 0; i < m; i++) {
      matrix[i][col] = 0;
    }
  }
}
