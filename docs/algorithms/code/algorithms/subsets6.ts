function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;

  const dfs = (arr: number[], index: number) => {
    if (index === n) {
      res.push([...arr]);
      return;
    }

    dfs([...arr, nums[index]], index + 1);
    dfs([...arr], index + 1);
  }

  dfs([], 0);

  return res;
};