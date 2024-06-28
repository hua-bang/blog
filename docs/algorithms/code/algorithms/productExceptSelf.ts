function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer: number[] = new Array(n);

  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let r = 1;
  for (let i = n - 2; i >= 0; i--) {
    r = r * nums[i + 1];
    answer[i] = answer[i] * r;
  }

  return answer;
}
