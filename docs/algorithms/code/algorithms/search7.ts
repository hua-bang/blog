// 思路：二分查找
// 分析：时间复杂度: O(logn), 空间复杂度 O(1)
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const curr = nums[mid];

    if (curr === target) {
      return mid;
    }

    if (curr > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};