function twoSum(numbers: number[], target: number): number[] {
  const length = numbers.length;
  let left = 0,
    right = length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }

    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}
