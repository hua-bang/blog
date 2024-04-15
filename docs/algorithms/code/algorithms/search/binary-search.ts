export const binarySearch = (arr: number[], target: number): number => {
  if (arr.length === 0) {
    return -1;
  }

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
};
console.log(binarySearch([1, 3, 4, 5, 6, 7, 9], 9));
