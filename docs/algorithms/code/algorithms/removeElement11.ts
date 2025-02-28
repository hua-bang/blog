// 思路：采用单个指针，遍历数组，遇到不等于val的元素，将其赋值给nums[count++]，最后返回count即可
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if(curr !== val) {
      nums[count++] = curr;
    }
  }

  return count;
};