function insert(intervals: number[][], newInterval: number[]): number[][] {
  const res: number[][] = [];
  const n = intervals.length;

  let index = 0;

  while (index < n && intervals[index][1] < newInterval[0]) {
    res.push(intervals[index]);
    index++;
  }

  while (index < n && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
    index++;
  }

  res.push(newInterval);

  while (index < n) {
    res.push(intervals[index]);
    index++;
  }

  return res;
}
