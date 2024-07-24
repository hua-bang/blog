function twoSum(price: number[], target: number): number[] {
  let left = 0,
    right = price.length - 1;

  while (left < right) {
    if (price[left] + price[right] === target) {
      return [price[left], price[right]];
    }
    if (price[left] + price[right] < target) {
      left++;
      continue;
    }
    if (price[left] + price[right] > target) {
      right--;
      continue;
    }
  }

  return [];
}
