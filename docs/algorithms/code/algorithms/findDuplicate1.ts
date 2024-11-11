function findDuplicate(nums: number[]): number {
  const map: Record<number, boolean> = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    }
    map[nums[i]] = true;
  }

  return -1;
};