function productExceptSelf(nums: number[]): number[] {
  let temp = 1;
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = temp;
    temp = temp * nums[i];
  }

  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = temp * res[i];
    temp = temp * nums[i];
  }

  return res;
}
