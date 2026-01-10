// 哈希表 时间复杂度 O(n) 空间复杂度 O(n)
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];
    if (map[other] !== undefined) {
      return [map[other], i];
    }
    map[nums[i]] = i;
  }

  return [-1, -1];
};