function maxSubArray(nums: number[]): number {
  let max = nums[0], prev = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const curr = prev < 0 ? nums[i] : prev + nums[i];
    max = Math.max(max, curr);
    prev = curr;
  } 

  return max;
};