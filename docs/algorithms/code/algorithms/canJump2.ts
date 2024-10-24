function canJump(nums: number[]): boolean {
  let max = 0;

  for(let i = 0; i < nums.length; i++) {
    if(i > max) {
      break;
    }

    max = Math.max(max, i + nums[i]);
    if(max >= nums.length - 1) {
      return true;
    }
  }

  return false; 
};