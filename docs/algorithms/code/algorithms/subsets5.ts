function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;

  const dfs = (prefixArr: number[], index: number) => {
    if (index === n) {
      res.push([...prefixArr]);
      return;
    }

    dfs([...prefixArr, nums[index]], index + 1);
    dfs([...prefixArr], index + 1);
  }

  dfs([], 0);
  return res;
};