// 思路：使用动态规划来做，其中 dp[i] 表示第 i 个斐波那契数，状态转移方程为 dp[i] = dp[i - 1] + dp[i - 2]
// 空间优化： 维护两个变量，分别表示第 i - 1 个斐波那契数和第 i 个斐波那契数，然后不断更新这两个变量
// 复杂度分析：时间复杂度 O(n)，空间复杂度为 O(n)
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  let prev = 0, curr = 1;

  for (let i = 2; i <= n; i++) {
    let temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}