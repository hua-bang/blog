// 思路：滑动窗口
// 复杂度分析：时间复杂度O(n), 空间复杂度O(1)
// 每个元素最多被访问 2 次
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, right = 0, sum = 0, min = Infinity;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;
  }

  return min === Infinity ? 0 : min;
};
