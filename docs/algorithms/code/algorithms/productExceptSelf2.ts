function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [], n = nums.length;

  let temp = 1;
  for(let i = 0; i < n; i++) {
    res[i] = temp;
    temp = temp * nums[i];
  }

  temp = 1;
  for(let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * temp;
    temp = temp * nums[i];
  }

  return res;
};