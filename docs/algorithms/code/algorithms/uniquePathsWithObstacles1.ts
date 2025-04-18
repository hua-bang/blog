// 思路：dp[i][j] 表示从左上角到右下角的路径数，状态转移方程为 dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，边界条件为 dp[0][j] = 1, dp[i][0] = 1
// 复杂度分析：空间复杂度 O(m * n), 时间复杂度 O(m * n)
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }

  for (let i = 0; i < n && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};