function canJump(nums: number[]): boolean {
  let maxRight = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxRight) {
      return false;
    }

    maxRight = Math.max(maxRight, i + nums[i]);
    if (maxRight >= nums.length - 1) {
      return true;
    }
  }

  return maxRight === nums.length - 1;
};