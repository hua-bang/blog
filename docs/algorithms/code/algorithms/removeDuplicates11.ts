// 思路：双指针，一个用于遍历数组，一个用于记录不重复的元素的个数
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count >= 2 && nums[i] === nums[count - 1] && nums[i] === nums[count - 2]) {
      continue;
    } else {
      nums[count++] = nums[i];
    }
  }

  return count;
};