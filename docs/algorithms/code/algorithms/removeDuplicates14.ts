// 方法：一个指针用于遍历数组，过程中，循环也有一个指针，用来记录连续重复两次的元素
// 复杂度分析：
// 时间复杂度：O(n)
// 空间复杂度：O(1)

function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count >= 2 && (nums[i] === nums[count - 1] && nums[i] === nums[count - 2])) {
      continue;
    } else {
      nums[count++] = nums[i];
    }
  }

  return count;
};