function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (startIndex: number) => {
    if (path.length > 1) {
      res.push([...path]);
    }

    const prevNum = path.length ? path[path.length - 1] : -101;

    const used: number[] = [];

    for (let i = startIndex; i < nums.length; i++) {
      if (nums[i] < prevNum) {
        continue;
      }
      if (used.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      used.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return res;
};