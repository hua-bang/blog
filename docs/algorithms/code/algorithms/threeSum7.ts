// 概述：需要统计里面和为0 的三元组
// 思路：先对数组进行排序，然后对每一项进行三元组匹配。
function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];

  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1, right = nums.length - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while(left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if(sum > 0) {
        while(left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else {
        while(left < right && nums[left] === nums[left + 1]) {
          left++; 
        }
        left++;
      }
    }
  }
  
  return res;
};