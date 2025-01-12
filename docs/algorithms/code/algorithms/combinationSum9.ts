function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const nums: number[] = [];

  const backtrack = (start: number, targetNumber: number) => {
    console.log(start, targetNumber, nums);
    if (targetNumber === 0 && nums.length === k) {
      res.push([...nums]);
      return;
    }

    if (targetNumber <= 0 || nums.length >= k) {
      return;
    }

    for (let i = start; i <= 9; i++) {
      nums.push(i);
      backtrack(i + 1, targetNumber - i);
      nums.pop();
    }
  }

  backtrack(1, n);
  return res;
};