function binarySearch(nums: number[], target: number) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

const res = binarySearch([1, 2, 4, 5, 6], 4);
console.log(res);
