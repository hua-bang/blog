// 思路：动态规划 状态：dp[i] 表示爬到第 i 阶楼梯的方法数， 状态转移方程：dp[i] = dp[i - 2] + dp[i - 1]，初始状态：dp[0] = 1, dp[1] = 2，边界条件：n <= 1
// 空间优化： 维护两个变量，分别表示第 i - 1 个斐波那契数和第 i 个斐波那契数，然后不断更新这两个变量
// 复杂度：时间复杂度：O(n)， 空间复杂度：O(1)
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let prev = 1, curr = 2;

  for (let i = 3; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
};