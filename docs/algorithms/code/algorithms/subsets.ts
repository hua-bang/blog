function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const dfs = (arr: number[], index: number) => {
    if(index === nums.length) {
      res.push(arr);
      return;
    }

    const value = nums[index];
    dfs([...arr, value], index + 1);
    dfs([...arr], index + 1);
  } 

  dfs([], 0);
  return res; 
};