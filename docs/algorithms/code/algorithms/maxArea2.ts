function maxArea(height: number[]): number {
  if(!height.length) {
    return 0;
  } 

  const n = height.length;

  let left = 0, right = n - 1, max = 0;

  while(left < right) {
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, (right - left) * h);
    
    if(height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};