function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1]
  }

  let left = 0, right = nums.length - 1;
  let targetIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const nextVal = nums[mid];
    if (nextVal === target) {
      targetIndex = mid;
    }

    if (nextVal > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (targetIndex === -1) {
    return [-1, -1];
  }

  let leftIndex = targetIndex, rightIndex = targetIndex;
  while (leftIndex > 0 && nums[leftIndex] === nums[leftIndex - 1]) {
    leftIndex--;
  }
  while (rightIndex < nums.length && nums[rightIndex] === nums[rightIndex + 1]) {
    rightIndex++;
  }

  return [leftIndex, rightIndex];
};