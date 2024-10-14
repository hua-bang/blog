function findMin(nums: number[]): number {
  // 左右边界
  let left = 0, right = nums.length - 1;
  while(left < right) {
    // 索引值
    const mid = left + Math.floor((right - left) / 2);
    // 当小于右边界的时候，右边界需要做变化
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      // 否则则是左边界做变化
      left = mid + 1;
    }
  }

  return nums[left];
};