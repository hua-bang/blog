/* 完全背包：空间优化后的动态规划 */
// 思路： 将二维dp数组压缩为一维dp数组，使用一维dp数组来表示当前状态下的最大价值
// 状态定义： dp[c] 表示容量为c的背包所能获得的最大价值
// 状态转移： dp[c] = Math.max(dp[c], dp[c - wgt[i]] + val[i])
// 注意：这里我们不需要从后往前遍历，因为这里的核心是，物品可以重复，所以我们可以从前往后遍历

// 空间复杂度：O(n)
// 时间复杂度：O(n * cap)
function unboundedKnapsackDPComp(
  wgt: Array<number>,
  val: Array<number>,
  cap: number
): number {
  const n = wgt.length;

  const dp = new Array(cap + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let c = 0; c <= cap; c++) {
      if (c >= wgt[i]) {
        dp[c] = Math.max(dp[c], dp[c - wgt[i]] + val[i]);
      }
    }
  }

  return dp[cap];
}