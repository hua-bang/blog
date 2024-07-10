function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let pos = points[0][1];
  let ans = 1;

  for (let balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }

  return ans;
}
