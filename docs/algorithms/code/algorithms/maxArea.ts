function maxArea(height: number[]): number {
  const length = height.length;
  let left = 0,
    right = length - 1;

  let max = 0;

  while (left < right) {
    let height1 = Math.min(height[left], height[right]);
    max = Math.max(max, (right - left) * height1);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
