function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const prevArr: number[] = [];

  const backtrack = (index: number) => {
    if (index >= nums.length) {
      res.push([...prevArr]);
      return;
    }

    prevArr.push(nums[index]);
    backtrack(index + 1);
    prevArr.pop();
    backtrack(index + 1);
  }

  backtrack(0);
  return res;

};