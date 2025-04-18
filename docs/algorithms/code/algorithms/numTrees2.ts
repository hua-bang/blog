// 96. 不同的二叉搜索树
// 思路：dp 为 n 个节点的二叉搜索树的个数，状态转移方程为 dp[i] = dp[j - 1] * dp[i - j]，j 表示根节点的位置(从0-n)，j - 1 表示左子树的节点个数，i - j 表示右子树的节点个数，边界条件为 dp[0] = 1, dp[1] = 1
// 复杂度分析：空间复杂度 O(n), 时间复杂度 O(n ^ 2) 
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