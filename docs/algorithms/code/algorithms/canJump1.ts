function canJump(nums: number[]): boolean {
  let n = nums.length;
  let maxRight = 0;

  for(let i = 0; i < n; i++) {
    if(i <= maxRight) {
      maxRight = Math.max(i + nums[i], maxRight);

      if(maxRight >= n - 1) {
        return true;
      }
    }
  }

  return false;
};