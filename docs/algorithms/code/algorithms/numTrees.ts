// 用 dp 数据记录，dp[i] 表示 i 个节点的二叉搜索树的个数
// 状态转移方程：dp[i] = dp[j - 1] * dp[i - j]，j 表示根节点的位置(从0-n)，j - 1 表示左子树的节点个数，i - j 表示右子树的节点个数
// 边界条件：dp[0] = 1, dp[1] = 1

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
};