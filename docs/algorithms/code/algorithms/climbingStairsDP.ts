// 爬楼梯
// 思路：动态规划
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n)
function climbingStairsDP(n: number): number {
  // 边界条件处理
  if (n <= 0) return 1; // 0阶楼梯有1种方法（不爬）
  if (n === 1) return 1; // 1阶楼梯有1种方法
  if (n === 2) return 2; // 2阶楼梯有2种方法

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 0阶楼梯有1种方法
  dp[1] = 1; // 1阶楼梯有1种方法
  dp[2] = 2; // 2阶楼梯有2种方法

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}