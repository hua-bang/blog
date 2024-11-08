function canJump(nums: number[]): boolean {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i > max) {
      return false;
    }

    max = Math.max(max, i + nums[i]);
    if (max >= nums.length - 1) {
      return true;
    }
  }

  return max >= nums.length - 1;
};