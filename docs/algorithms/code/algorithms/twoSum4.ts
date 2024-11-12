function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [i, map[target - nums[i]]];
    }
    map[nums[i]] = i;
  }

  return [-1, -1]
};