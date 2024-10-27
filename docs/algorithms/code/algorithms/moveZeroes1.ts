/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let count = 0;

  for(let num of nums) {
    if(num !== 0) {
      nums[count++] = num;
    }
  }

  for(let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
};