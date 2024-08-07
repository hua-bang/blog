function fileCombination(target: number): number[][] {
  if (target === 0 || target === 1) {
    return [[target]];
  }

  let left = 1,
    right = 2;
  let sum = left + right;
  const res = [];
  while (left <= target << 2 && left !== right) {
    if (sum > target) {
      sum -= left;
      left++;
    } else if (sum < target) {
      right++;
      sum += right;
    } else {
      let arr = [];
      for (let index = left; index <= right; index++) {
        arr.push(index);
      }
      res.push(arr);
      sum -= left;
      left++;
    }
  }

  return res;
}
