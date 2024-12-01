function jump(nums: number[]): number {
  let index = 0, count = 0;
  const n = nums.length;

  while (index < n - 1) {
    if (index + nums[index] >= n - 1) {
      return count + 1;
    }

    let leftIndex = index + 1, rightIndex = index + nums[index];
    let max = 0;

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
};