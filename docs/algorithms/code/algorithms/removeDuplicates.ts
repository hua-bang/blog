function removeDuplicates(nums: number[]): number {
  let left = 0,
    right = 0;
  while (right < nums.length) {
    while (right < nums.length - 1 && nums[right] === nums[right + 1]) {
      right++;
    }
    nums[left++] = nums[right++];
  }

  return left;
}
