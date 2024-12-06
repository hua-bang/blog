function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Record<number, number> = {};

  for(let i = 0; i < nums.length; i++) {
    const targetIndex = map[nums[i]];
    if (targetIndex !== undefined) {
      if((i - targetIndex) <= k) {
        return true;
      }
    }
    map[nums[i]] = i;
  }  

  return false;
};