/* 零钱兑换：动态规划 */
// 思路：动态规划
// 状态定义：dp[i][j] 为选择第 i 个硬币时，凑到 j 的硬币最小值
// 状态转移方程
// - 不能放入: dp[i][j] = dp[i-1][j]
// - 能放入: dp[i][j] = Math.min(dp[i-1][j], dp[i][j - coins[i]] + 1)

// 复杂度分析：时间复杂度O(n * amt)，空间复杂度O(n * amt)
function coinChangeDP(coins: Array<number>, amt: number): number {
  const n = coins.length;
  const dp = new Array(n).fill(0).map(() => new Array(amt + 1).fill(Infinity));

  dp[0][0] = 0;

  for (let j = 1; j <= amt; j++) {
    if (j % coins[0] === 0) {
      dp[0][j] = j / coins[0];
    } else {
      dp[0][j] = Infinity;
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= amt; j++) {
      if (j === 0) {
        dp[i][j] = 0
      } else if (coins[i] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);
      }
    }
  }

  return dp[n - 1][amt] === Infinity ? -1 : dp[n - 1][amt];
}