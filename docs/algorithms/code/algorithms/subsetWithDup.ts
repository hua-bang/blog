const subsetsWithDup = (nums: number[]): number[][] => {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (index: number) => {
    res.push([...arr]);

    if(index === nums.length) {
      return;
    }

    for(let i = index; i < nums.length; i++) {
      if(i > index && nums[i] === nums[i - 1]) {
        continue;
      }

      arr.push(nums[i]);
      backtrack(i + 1);
      arr.pop();
    }
  }

  backtrack(0);

  return res;
}