/* 爬楼梯最小代价：动态规划 */
// 思路：动态规划
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function minCostClimbingStairsDP(cost: Array<number>): number {
  const n = cost.length - 1;

  if (n === 1 || n === 2) {
    return cost[n];
  }

  let prev = cost[1], curr = cost[2];

  for (let i = 3; i <= n; i++) {
    const temp = curr;
    curr = Math.min(prev, temp) + cost[i];
    prev = temp;
  }

  return curr;
}