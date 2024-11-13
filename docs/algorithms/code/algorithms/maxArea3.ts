function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    max = Math.max(max, h * w);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};