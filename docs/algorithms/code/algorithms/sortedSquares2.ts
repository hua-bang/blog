function sortedSquares(nums: number[]): number[] {
  let left = 0, right = nums.length - 1;
  const res: number[] = []
  let index = nums.length - 1;
  while(left < right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];

    if(leftVal >= rightVal) {
      res.unshift(leftVal);
      left++;
    } else {
      res.unshift(rightVal);
      right--;
    }
  }
  
res.unshift(nums[left] * nums[left])
  return res;
};