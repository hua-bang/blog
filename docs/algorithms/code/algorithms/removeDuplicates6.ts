function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count >= 2 && nums[i] === nums[count - 1] && nums[i] === nums[count - 2]) {
      continue;
    }
    nums[count++] = nums[i];
  }

  return count;
};