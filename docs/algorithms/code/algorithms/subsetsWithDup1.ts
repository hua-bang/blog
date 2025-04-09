function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  nums.sort((a, b) => a - b);

  const backtrack = (index: number) => {
    res.push([...path]);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return res;
};