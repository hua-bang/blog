// 思路： 采用滚动数组的思想，将空间复杂度从 O(n) 降低到 O(1)
// prev 代表 dp[i - 1]，curr 代表 dp[i]
// 每次循环，将 curr 的值赋给 prev，将 prev + curr 的值赋给 curr
// 这样就可以将空间复杂度从 O(n) 降低到 O(1)
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }
  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
};