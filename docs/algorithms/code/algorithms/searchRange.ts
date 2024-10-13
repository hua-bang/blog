function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let left = 0,
    right = nums.length - 1,
    targetIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      targetIndex = mid;
      break;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (targetIndex !== -1) {
    let i = targetIndex,
      j = targetIndex;
    while (i >= 1 && nums[i] === nums[i - 1]) {
      i--;
    }
    while (j < nums.length - 1 && nums[j] === nums[j + 1]) {
      j++;
    }

    return [i, j];
  }

  return [-1, -1];
}
