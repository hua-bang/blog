// 思路：哈希表
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [i, map[diff]];
    }

    map[nums[i]] = i;
  }

  return [-1, -1]; // 未找到符合条件的两个数，返回 [-1, -1] 或其他表示错误的数值
}