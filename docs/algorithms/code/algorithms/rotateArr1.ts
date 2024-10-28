/**
 Do not return anything, modify nums in-place instead.
 */

 function rotateArr(nums: number[], left: number, right: number) {
  while(left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}
function rotate(nums: number[], k: number): void {
  if(nums.length === 0 || k === 0) {
    return;
  }

  const n = nums.length;
  k = k % n;

  rotateArr(nums, 0, n - 1);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k, n - 1);
};