// 思路：通过不断旋转获得数据。
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function rotate(nums: number[], k: number): void {
  k = k % nums.length;
  swap(nums, 0, nums.length - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, nums.length - 1);
};

function swap(nums: number[], left: number, right: number) {
  while (left <= right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}