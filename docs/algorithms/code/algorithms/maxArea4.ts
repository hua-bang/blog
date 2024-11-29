function maxArea(height: number[]): number {
  let max = 0, left = 0, right = height.length - 1;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    max = Math.max(h * w, max);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};