function twoSum(numbers: number[], target: number): number[] {
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const val = numbers[left] + numbers[right];
    if (val === target) {
      return [left + 1, right + 1];
    }

    if (val > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};