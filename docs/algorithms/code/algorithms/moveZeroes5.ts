/**
 * Do not return anything, modify nums in-place instead.
 * 
 * 优化解法：双指针交换法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
 * 优势：
 * 1. 减少写操作次数 - 只在需要时交换，而不是覆盖所有元素
 * 2. 保持非零元素的相对顺序
 * 3. 只遍历一次数组
 */
function moveZeroes(nums: number[]): void {
  let left = 0; // 指向下一个非零元素应该放置的位置

  // 遍历数组，right指针寻找非零元素
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // 只有当left和right不同时才需要交换
      // 这避免了不必要的自我交换
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
}

export default moveZeroes; 