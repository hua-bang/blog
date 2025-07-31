function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  let res: number[][] = [];
  let temp = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [left1, right1] = temp;
    let [left2, right2] = intervals[i];

    if (right2 < right1) {
      continue;
    }

    if (left2 > right1) {
      res.push(temp);
      temp = [left2, right2];
      continue;
    }

    if (right2 > right1) {
      temp[1] = right2;
    }
  }

  res.push(temp);

  return res;
};