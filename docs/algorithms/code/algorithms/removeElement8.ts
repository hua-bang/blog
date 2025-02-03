function removeElement(nums: number[], val: number): number {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(val !== nums[i]) {
      nums[count++] = nums[i];
    }
  }  

  return count;
};