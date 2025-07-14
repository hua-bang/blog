// 方法：双指针，一个指针用于遍历数组，一个指针用于记录不等于val的元素
// 复杂度分析：
// 时间复杂度：O(n)
// 空间复杂度：O(1)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  return count;
};