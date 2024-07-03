function minSubArrayLen(target: number, nums: number[]): number {
  let n = nums.length;
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
