function maxSubArray(nums: number[]): number {
  const n = nums.length;

  let cur = nums[0];

  let max = cur;

  for (let i = 1; i < n; i++) {
    cur = Math.max(cur, 0) + nums[i];

    max = Math.max(max, cur);
  }

  return max;
}
