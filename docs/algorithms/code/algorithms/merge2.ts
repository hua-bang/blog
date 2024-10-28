function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let res: number[][] = [];
  let item = intervals[0];

  for(let i = 1; i < intervals.length; i++) {
    const [left1, right1] = item;
    const [left2, right2] = intervals[i];

    if(left2 > right1) {
      res.push(item);
      item = [left2, right2];
      continue;
    }

    if(right2 < right1) {
      continue;
    }

    if(right2 > right1) {
      item[1] = right2
    }
  }

  res.push(item);
  return res;
};