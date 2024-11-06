function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currVal = nums[mid];
    if (currVal === target) {
      return mid;
    }

    if (currVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};