// https://leetcode.cn/problems/move-zeroes/

function swap<T>(nums: T[], i: number, j: number) {
  const temp: T = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    if (nums[right]) {
      swap(nums, left, right);
      left++;
    }
    right++;
  }
}
