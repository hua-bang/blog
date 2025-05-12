// 思路：采用动态规划。
// 定义状态： dp[i] 表示当前 fib 数字
// 状态转移方程： dp[i] = dp[i - 1] + dp[i - 2]
// 初始状态： dp[0] = 1, dp[1] = 1
// 最终状态： dp[n]
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = (prev + curr) % 1000000007;
    prev = temp;
  }

  return curr;
}