function fileCombination(target: number): number[][] {
  if (target === 0 || target === 1) {
    return [[target]];
  }

  let left = 1,
    right = 2;
  let sum = left + right;
  let res: number[][] = [];

  while (left <= target / 2 && left < right) {
    if (sum < target) {
      right++;
      sum += right;
    } else if (sum > target) {
      sum -= left;
      left++;
    } else {
      const arr: number[] = [];

      for (let i = left; i <= right; i++) {
        arr.push(i);
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }

  return res;
}
