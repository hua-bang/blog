function majorityElement(nums: number[]): number {
  let res = nums[0], count = 1;
  const n = nums.length;

  for(let i = 1; i < nums.length; i++) {
    if(res === nums[i]) {
      count++;
      continue;
    }

    if(count === 1) {
      res = nums[i];
      continue;
    } else {
      count--;
    }
  } 

  return res; 
};