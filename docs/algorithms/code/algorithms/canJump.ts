function canJump(nums: number[]): boolean {
  let n = nums.length;
  let rightmost = 0;

  for (let i = 0; i < n; i++) {
    if (i > rightmost) {
      continue;
    }
    rightmost = Math.max(rightmost, nums[i] + i);
    if (rightmost >= n - 1) {
      return true;
    }
  }

  return false;
}
