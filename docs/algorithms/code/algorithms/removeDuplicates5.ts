function removeDuplicates(nums: number[]): number {
  let prev = nums[0], count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== prev) {
      nums[count++] = nums[i];
      prev = nums[i];
    }
  }

  return count;
};