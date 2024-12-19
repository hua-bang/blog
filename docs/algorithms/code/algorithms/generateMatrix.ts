// 本质上是要区分好区间
function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let num = 1;

  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      res[top][col] = num++;
    }
    if (top++ > bottom) {
      break;
    }
    for (let row = top; row <= bottom; row++) {
      res[row][right] = num++;
    }
    if (right-- < left) {
      break;
    }
    for (let col = right; col >= left; col--) {
      res[bottom][col] = num++;
    }
    if (bottom-- < top) {
      break;
    }

    for (let row = bottom; row >= top; row--) {
      res[row][left] = num++;
    }
    if (left++ > right) {
      break;
    }
  }

  return res;
};