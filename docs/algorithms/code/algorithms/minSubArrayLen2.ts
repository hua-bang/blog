// 描述：需要找到最小的子数组长度，并且子数组的和大于等于target
// 思路：采用双指针，left指向子数组的起始位置，right指向子数组的结束位置
// 当子数组的和大于等于target时，更新最小长度，然后left指针向右移动，直到子数组的和小于target
// 当子数组的和小于target时，right指针向右移动，直到子数组的和大于等于target

function minSubArrayLen (target: number, nums: number[]): number {
  let sum = 0, left = 0, right = 0, minLength = Infinity;

  while(right < nums.length) {
    sum += nums[right];

    while(sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left++];
    }
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
}