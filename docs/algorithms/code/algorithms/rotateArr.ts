function rotateArr(nums: number[], left: number, right: number) {
  while (left < right) {
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
  k = k % nums.length;
  rotateArr(nums, 0, nums.length - 1);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k, nums.length - 1);
}
