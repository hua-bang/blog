// 思路：使用双指针，left, right，每次 right ++， 当 sum >= target 时，保存最小的长度，然后 left ++， 直到 sum < target
// 分析：时间复杂度: O(n), 空间复杂度 O(1)
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0, right = 0;
  let min = Infinity;
  let sum = 0;

  while(right < nums.length) {
    sum += nums[right];

    while(sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }

    right++;
  }

  return min === Infinity ? 0 : min;
};