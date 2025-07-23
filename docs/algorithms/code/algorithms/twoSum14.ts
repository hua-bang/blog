// 思路：双指针，一左一右，往中间靠近
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function twoSum(numbers: number[], target: number): number[] {
  let leftIndex = 0, rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex];
    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1];
    }

    if (sum > target) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return [-1, -1];
};