function search(nums: number[], target: number): number {
  let k = 0;
  const n = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      k = i;
    }
  }

  const tempNums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const index = i >= k ? i - k : i - k + n;
    tempNums[index] = nums[i];
  }

  let left = 0,
    right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = tempNums[mid];
    if (value === target) {
      return (mid + k) % n;
    }
    if (value > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
