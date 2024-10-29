/**
 Do not return anything, modify matrix in-place instead.
 */
 function setZeroes(matrix: number[][]): void {
  const cols: number[] = [], rows: number[] = [];
  const m = matrix.length, n = matrix[0].length;

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for(let i = 0; i < rows.length; i++) {
    for(let index = 0; index < n; index++) {
      matrix[rows[i]][index] = 0;
    }
  } 

  for(let j = 0; j < cols.length; j++) {
    for(let index = 0; index < m; index++) {
      matrix[index][cols[j]] = 0;
    }
  }
};