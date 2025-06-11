// 思路：双指针，一个指针用于遍历数组，一个指针用于记录不等于 val 的元素的个数
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(1)
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  return count;
};