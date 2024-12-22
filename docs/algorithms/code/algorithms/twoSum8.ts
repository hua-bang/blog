function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const targetIndex = map[target - nums[i]];
    if (targetIndex !== undefined) {
      return [targetIndex, i];
    }
    map[nums[i]] = i;
  }

  return [-1, -1];
};