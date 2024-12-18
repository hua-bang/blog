function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0, minLength = Infinity, left = 0, right = 0;

  while (right < nums.length) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left++];
    }
    right++;
  }

  return minLength === Infinity ? 0 : minLength;
};