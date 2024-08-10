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

function twoSum(price: number[], target: number): number[] {
  let left = 0,
    right = price.length - 1;

  while (left < right) {
    const currVal = price[left] + price[right];

    if (currVal === target) {
      return [price[left], price[right]];
    }

    if (currVal < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
