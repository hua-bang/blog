// 思路：通过三次反转，将数组旋转 k 次
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  swap(nums, 0, nums.length - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);
};

function swap(nums: number[], left: number, right: number) {
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}