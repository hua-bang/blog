// 思路：采用动态规划，通过 prev 和 curr 两个变量来存储 dp[i - 1] 和 dp[i]
// 每次循环，将 curr 的值赋给 prev，将 prev + curr 的值赋给 curr
// 这样就可以将空间复杂度从 O(n) 降低到 O(1)
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function climbStairs(n: number): number {
  if (n <= 2) {
    return n;
  }

  let prev = 1, curr = 2;
  for (let i = 3; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
};