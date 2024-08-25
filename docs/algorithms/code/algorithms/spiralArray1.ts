function spiralArray(array: number[][]): number[] {
  if (array.length === 0 || array[0].length === 0) {
    return [];
  }

  const rows = array.length,
    columns = array[0].length;
  const res: number[] = [];
  let left = 0,
    top = 0,
    bottom = rows - 1,
    right = columns - 1;

  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      res.push(array[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(array[row][right]);
    }

    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        res.push(array[bottom][column]);
      }

      for (let row = bottom; row > top; row--) {
        res.push(array[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }

  return res;
}
