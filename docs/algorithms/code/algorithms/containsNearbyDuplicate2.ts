// 思路：使用哈希表存储每个元素最近一次出现的下标，遍历数组，如果当前元素在哈希表中存在，且下标差小于等于k，则返回true，否则更新哈希表
// 复杂度：时间复杂度 O(n), 空间复杂度 O(n)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (map[val] !== undefined && i - map[val] <= k) {
      return true;
    }
    map[val] = i;
  }

  return false;
};