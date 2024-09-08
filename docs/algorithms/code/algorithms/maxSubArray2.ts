function maxSubArray(nums: number[]): number {
  const n = nums.length;
  let curr = nums[0],
    max = curr;

  for (let i = 1; i < n; i++) {
    curr = Math.max(curr, 0) + nums[i];
    max = max < curr ? curr : max;
  }

  return max;
}
