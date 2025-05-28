/* 爬楼梯：空间优化后的动态规划 */
// 思路：动态规划
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function climbingStairsDPComp(n: number): number {
  if (n === 1 || n === 2) {
    return n;
  }

  let prev = 1, curr = 2;

  for (let i = 3; i <= n; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }

  return curr;
}