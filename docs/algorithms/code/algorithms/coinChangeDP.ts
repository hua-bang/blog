/* 零钱兑换：动态规划 */
// 思路：动态规划
// 状态定义： dp[i][j] 为选择第 i 个硬币时，凑到 j 的硬币最小值
// 状态转移方程: 
// - 能放入：  dp[i][j] = Math.min(dp[i-1][j], dp[i][j - coins[i]] + 1)
// - 不能放入： dp[i][j] = dp[i-1][j]


function coinChangeDP(coins: Array<number>, amt: number): number {
  // 输入验证
  if (amt < 0 || coins.length === 0) return -1;
  if (amt === 0) return 0;

  const n = coins.length;

  const dp = Array.from({ length: n }, () => Array(amt + 1).fill(Infinity));

  // 初始化第一行：只使用第一个硬币
  // 金额为0时，需要0个硬币
  dp[0][0] = 0;
  for (let j = 1; j <= amt; j++) {
    // 如果没法凑出，则为 Infinity
    dp[0][j] = j % coins[0] === 0 ? j / coins[0] : Infinity;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= amt; j++) {
      if (j === 0) {
        // 金额为0时，需要0个硬币
        dp[i][j] = 0;
      } else if (coins[i] > j) {
        // 如果硬币大于当前金额，则无法凑出
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);
      }
    }
  }

  return dp[n - 1][amt] === Infinity ? -1 : dp[n - 1][amt];
}