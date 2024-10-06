function maxSubArray(nums: number[]): number {
  let max = nums[0],
    prefix = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const currVal = prefix > 0 ? prefix + nums[i] : nums[i];
    max = Math.max(max, currVal);
    prefix = currVal;
  }

  return max;
}
