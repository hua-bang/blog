// 思路：采用动态规划。
// 定义状态： dp[i] 由 i 个节点组成的二叉搜索树的个数
// 状态转移方程： dp[i] = dp[j - 1] * dp[i - j]， j 从 1 到 i 遍历
// 初始状态： dp[0] = 1, dp[1] = 1
// 最终状态： dp[n]
// 复杂度分析：时间复杂度 O(n^2)，空间复杂度 O(n)
function numTrees(n: number): number {
  if (n <= 1) {
    return 1;
  }

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
}