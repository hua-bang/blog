function majorityElement(nums: number[]): number {
  let count = 1, num = nums[0];
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] === num) {
      count++;
      continue;
    }

    if(count === 1) {
      num = nums[i];
    } else {
      count--;
    }
  }

  return num;
};