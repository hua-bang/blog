// 完全背包问题
// 思路：动态规划, 本质上是要去考虑多个背包如何放进去
// 状态定义：dp[i][j] 表示前 i 个物品在容量为 j 所能获得的最大价值
// 状态转移方程：dp[i][j] = max(dp[i][j], dp[i - 1][j - weight[i] * k] + value[i] * k)
// 复杂度分析：时间复杂度 O(n * w^2), 空间复杂度 O(n * w)
// 时间复杂度详解：外层循环 O(n)，中层循环 O(w)，内层 k 循环最多执行 w 次（当 weight[i] = 1 时），所以总体是 O(n * w * w) = O(n * w^2)
function completeKnapsackNaive(n: number, w: number, weight: number[], value: number[]): number {
  const dp = new Array(n).fill(0).map(() => new Array(w + 1).fill(0));

  for (let j = weight[0]; j <= w; j++) {
    dp[0][j] = value[0] * Math.floor(j / weight[0]);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= w; j++) {
      dp[i][j] = dp[i - 1][j];

      for (let k = 1; k * weight[i] <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - weight[i] * k] + value[i] * k);
      }
    }
  }

  return dp[n - 1][w];
}