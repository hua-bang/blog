// 方法：三次反转
// 复杂度分析：
// 时间复杂度：O(n)
// 空间复杂度：O(1)
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  swap(nums, 0, n - 1);
  swap(nums, 0, k - 1);
  swap(nums, k, n - 1);
};

function swap(arr: number[], left: number, right: number) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}