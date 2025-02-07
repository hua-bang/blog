// 概述：移除数组中等于val的元素，返回新数组的长度
// 思路：使用 count 指针，当 nums[i] !== val 时，将 nums[i] 赋值给 nums[count]，count++
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
function removeElement(nums: number[], val: number): number {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }  

  return count;
};