function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const nextVal = prev > 0 ? prev + nums[i] : nums[i];
    max = Math.max(max, nextVal);
    prev = nextVal;
  }

  return max;
};