// https://leetcode.cn/problems/longest-uncommon-subsequence-i/?envType=daily-question&envId=2024-06-16

function findLUSLength(a: string, b: string): number {
  return a === b ? -1 : Math.max(a.length, b.length);
}
