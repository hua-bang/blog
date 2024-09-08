function sortedSquares(nums: number[]): number[] {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  return nums.map((n) => n * n);
}

function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0, j = nums.length - 1, pos = nums.length - 1; i <= j; pos--) {
    if (nums[i] * nums[i] > nums[j] * nums[j]) {
      result[pos] = nums[i] * nums[i];
      i++;
    } else {
      result[pos] = nums[j] * nums[j];
      j--;
    }
  }

  return result;
}
