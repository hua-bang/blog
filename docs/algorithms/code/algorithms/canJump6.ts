// 思路：贪心算法，遍历一次，记录最大索引
// 复杂度：时间O(n)，空间O(1)
function canJump(nums: number[]): boolean {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex >= nums.length - 1) {
      return true;
    }
    if (i > maxIndex) {
      return false;
    }
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }

  return false;
};