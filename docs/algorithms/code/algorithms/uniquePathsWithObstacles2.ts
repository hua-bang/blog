// 思路：采用动态规划
// 定义状态： dp[i][j] 表示从 (0, 0) 到 (i, j) 的路径数
// 状态转移方程: dp[i][j] = obstacleGrid[i][j] === 1? 0 : dp[i - 1][j] + dp[i][j - 1]
// 复杂度分析： 时间复杂度：O(mn)，空间复杂度：O(mn)
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};