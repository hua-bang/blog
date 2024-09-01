function removeDuplicates(nums: number[]): number {
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[count - 1]) {
      continue;
    }
    nums[count++] = nums[i];
  }

  return count;
}
