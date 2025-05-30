// 0-1 背包：动态规划
// 状态定义： dp[j] 表示容量为 j 的背包的最大价值
// 初始状态： 当 j < wgt[0] 时，dp[j] = 0，当 j >= wgt[0] 时，dp[j] = val[0]
// 状态转移： dp[j] = Math.max(dp[j], dp[j - wgt[i]] + val[i])
// 复杂度：时间 O(n*c)，空间 O(c)
// 注意：这里必须从后向前遍历，因为 dp[j] 的值依赖于 dp[j - wgt[i]]，如果从前向后遍历，dp[j - wgt[i]] 的值会被覆盖
function knapsackDPComp(wgt: Array<number>, val: Array<number>, c: number): number {
  const n = wgt.length;
  const dp = new Array(c + 1).fill(0);

  for (let j = wgt[0]; j <= c; j++) {
    dp[j] = val[0];
  }

  for (let i = 0; i < n; i++) {
    for (let j = c; j >= wgt[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - wgt[i]] + val[i]);
    }
  }

  return dp[c];
}