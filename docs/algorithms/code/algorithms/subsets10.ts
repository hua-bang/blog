function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (index: number) => {
    res.push([...path]);

    if (index >= nums.length) {
      return;
    }

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1);
      path.pop();
    }
  }

  backtrack(0);
  return res;
};