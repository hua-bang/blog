function jump(nums: number[]): number {
  const n = nums.length;
  let index = 0, count = 0;

  while (index < n - 1) {
    if (nums[index] + index >= n - 1) {
      return count + 1;
    }

    let leftIndex = index, rightIndex = index + nums[index];
    let max = -Infinity;

    for (let i = leftIndex; i <= rightIndex; i++) {
      if (max <= nums[i] + i) {
        max = nums[i] + i;
        leftIndex = i;
      }
    }

    index = leftIndex;
    count++;
  }

  return count;
};