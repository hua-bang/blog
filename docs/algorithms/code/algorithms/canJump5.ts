// 思路：数组遍历，计算 maxIndex
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function canJump(nums: number[]): boolean {
  let maxIndex = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > maxIndex) {
      return false;
    }

    if (i === n - 1) {
      return true;
    }

    maxIndex = i + nums[i] > maxIndex ? i + nums[i] : maxIndex;

    if (maxIndex >= n - 1) {
      return true;
    }
  }

  return false;
};