function rob(nums: number[]): number {
  const n = nums.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(2).fill(0));
  dp[0][0] = 0, dp[0][1] = nums[0];
  let max = nums[0];

  for(let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i -1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];

    max = Math.max(dp[i][1], max);
  }

  return max;
};