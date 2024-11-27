function canJump(nums: number[]): boolean {
  let maxRight = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxRight) {
      return false;
    }

    maxRight = Math.max(nums[i] + i, maxRight);

    if (maxRight >= nums.length) {
      return true;
    }
  }

  return maxRight === nums.length - 1;
};