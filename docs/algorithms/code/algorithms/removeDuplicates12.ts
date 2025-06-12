// 思路：通过双指针，一个指针用于遍历数组，一个指针用于记录不重复的元素
// 判断条件：如果 num === nums[count - 1] && num === nums[count - 2]，则跳过，否则将 num 赋值给 nums[count]，count 自增
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let num of nums) {
    if (count >= 2 && num === nums[count - 1] && num === nums[count - 2]) {
      continue;
    }
    nums[count++] = num;
  }

  return count;
};