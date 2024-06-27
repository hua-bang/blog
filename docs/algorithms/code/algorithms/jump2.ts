function jump(nums: number[]): number {
  const n = nums.length;
  let index = 0;
  let count = 0;

  while (index < n - 1) {
    if (index + nums[index] >= n - 1) {
      return count + 1;
    }

    let leftIndex = index + 1,
      rightIndex = index + nums[index];
    let max = -Infinity;

    for (let i = leftIndex; i <= rightIndex; i++) {
      if (max <= i + nums[i]) {
        max = i + nums[i];
        leftIndex = i;
      }
    }

    index = leftIndex;
    count++;
  }

  return count;
}
