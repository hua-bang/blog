// 思路：两数之和， 哈希表
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n)
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];

    if (map[target - val] !== undefined) {
      return [map[target - val], i];
    }

    map[val] = i;
  }

  return [-1, -1];
}