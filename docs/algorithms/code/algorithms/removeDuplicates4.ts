function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let count = 0;
  nums[count++] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(nums[count - 1] !== nums[i]) {
      nums[count++] = nums[i];
    }
  }

  return count;
};