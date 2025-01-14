function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtrack = (arr: number[], index: number) => {
    if(index === nums.length) {
      res.push([...arr]);
      return;
    }

    backtrack([...arr, nums[index]], index + 1);
    backtrack([...arr], index + 1);
  }

  backtrack([], 0); 
  return res;
};