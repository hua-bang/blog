// 思路：左右指针，从而计算高度
// 复杂度：时间复杂度 O(n), 空间复杂度 O(1)
function maxArea(height: number[]): number {
  let area = 0, leftIndex = 0, rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const currHeight = Math.min(height[leftIndex], height[rightIndex]);
    const targetArea = (rightIndex - leftIndex) * currHeight;
    if (area < targetArea) {
      area = targetArea
    }

    if (height[leftIndex] >= height[rightIndex]) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }

  return area;
};