// 1. 设计指针 left right
// 2. 找 mid， 看能否遇到
// 3. 实在遇不到的话，返回最后的 left。
function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = nums[mid];
    if (val === target) {
      return mid;
    }

    if (val < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};