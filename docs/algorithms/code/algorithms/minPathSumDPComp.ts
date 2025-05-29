/* 最小路径和：空间优化后的动态规划 */
function minPathSumDPComp(grid: Array<Array<number>>): number {
  const n = grid.length, m = grid[0].length;

  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[n - 1][m - 1];
}