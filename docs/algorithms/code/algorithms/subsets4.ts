function subsets(nums: number[]): number[][] {
  const res: number[][] = [], n = nums.length;

  const dfs = (arr: number[], index: number) => {
    if(index === n) {
      res.push(arr);
      return;
    }

    dfs([...arr], index + 1);
    dfs([...arr, nums[index]], index + 1);
  }

  dfs([], 0);
  return res;  
};