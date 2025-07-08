function twoSum(price: number[], target: number): number[] {
  const n = price.length;
  let leftIndex = 0, rightIndex = n - 1;
  while (leftIndex < rightIndex) {
    const val = price[leftIndex] + price[rightIndex];
    if (val === target) {
      return [price[leftIndex], price[rightIndex]];
    }
    if (val > target) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return [-1, -1];
};