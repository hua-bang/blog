function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  const backtrack = (prevArr: number[], index: number) => {
    if(index === nums.length) {
      res.push([...prevArr]);
      return;
    }

    backtrack([...prevArr, nums[index]], index + 1);
    backtrack([...prevArr], index + 1);
  }

  backtrack([], 0);

  return res;
};

const subsets = (nums: number[]): number[][] => {
  const res: number[][] = [];

  const prevArr: number[] = [];

  const backtrack = (index: number) => {
    res.push([...prevArr]);

    if(index === nums.length) {
      return;
    }

    for(let i = index; i < nums.length; i++) {
      prevArr.push(nums[i]);
      backtrack(i + 1);
      prevArr.pop();
    }
  }

  backtrack(0);

  return res;
}