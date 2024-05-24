function dfs(nums: number[], target: number, left: number, right: number): number {
  if (left > right) {
    return -1;
  }

  const m = left + ((right - left) >> 1);
  if (nums[m] < target) {
    return dfs(nums, target, m + 1, right);
  } else if(nums[m] > target) {
    return dfs(nums, target, left, m - 1);
  } else {
    return m;
  }
}

/* 二分查找 */
function binarySearch(nums: number[], target: number): number {
  const n = nums.length;
  // 求解问题 f(0, n-1)
  return dfs(nums, target, 0, n - 1);
}

console.log(binarySearch([1,2,3,4,5], 3));