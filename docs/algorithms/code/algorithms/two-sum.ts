// hash table
// 时间复杂度O(N) 空间复杂度 O(N)
function twoSum(nums: number[], target: number): number[] {
  const map: Record<string, any> = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
  }

  return [];
}

// 时间复杂度O(N^2) 空间复杂度O(1)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}
