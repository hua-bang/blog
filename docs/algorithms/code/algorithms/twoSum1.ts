function twoSum(price: number[], target: number): number[] {
  let left = 0,
    right = price.length - 1;

  while (left < right) {
    const sum = price[left] + price[right];
    if (sum === target) {
      return [price[left], price[right]];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}
