/**
 Do not return anything, modify nums in-place instead.
 */
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
function moveZeroes(nums: number[]): void {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
};