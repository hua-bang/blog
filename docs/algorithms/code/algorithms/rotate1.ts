function reverse(nums: number[], left: number, right: number) {
  while(left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length - 1;
  const kIndex = k % nums.length;
  reverse(nums, 0, n);
  reverse(nums, 0, kIndex - 1);
  reverse(nums, kIndex, n);
};