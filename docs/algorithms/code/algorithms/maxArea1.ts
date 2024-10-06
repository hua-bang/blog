function maxArea(height: number[]): number {
  if (!height.length) {
    return 0;
  }

  let left = 0,
    right = height.length - 1,
    max = 0;

  while (left < right) {
    const height1 = Math.min(height[left], height[right]);
    max = Math.max(max, (right - left) * height1);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}
å;
