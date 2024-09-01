function containsDuplicate(nums: number[]): boolean {
  const map: Record<number, true> = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    }
    map[nums[i]] = true;
  }

  return false;
}
