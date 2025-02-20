// 思路：遍历数据，以及用一个变量记录当前下标，当前值不等于目标值时，将当前值赋值给当前下标，然后当前下标加一
// 分析：时间复杂度O(n)，空间复杂度O(1)
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr !== val) {
      nums[count++] = curr;
    }
  }  

  return count;
};