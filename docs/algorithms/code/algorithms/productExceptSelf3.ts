function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [];

  let temp = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(temp);
    temp = temp * nums[i];
  }

  temp = 1;
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] = res[i] * temp;
    temp = temp * nums[i];
  }

  return res;
};