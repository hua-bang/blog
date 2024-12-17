function maxArea(height: number[]): number {
  let max = 0, left = 0, right = height.length - 1;

  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, w * h);
    if (height[left] >= height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};