function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const used: number[] = [];

  const backtrack = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i] === 1) {
        continue;
      }
      path.push(nums[i]);
      used[i] = 1;
      backtrack();
      path.pop();
      used[i] = 0;
    }
  }

  backtrack();
  return res;
};