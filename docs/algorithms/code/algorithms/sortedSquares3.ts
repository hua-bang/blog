function sortedSquares(nums: number[]): number[] {
  const res: number[] = [];
  let left = 0, right = nums.length -1;
  let index = nums.length - 1;
  while(left <= right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];
    if(leftVal >= rightVal) {
      res[index--] = leftVal;
      left++;
    } else {
      res[index--] = rightVal;
      right--;
    }
  }
  
  return res;
};

