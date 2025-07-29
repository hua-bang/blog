// 复杂度分析：
// 时间复杂度：O(n)，其中 n 为数组的长度。
// 空间复杂度：O(n)，其中 n 为数组的长度，哈希表中最多存储 n 个元素。
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set<number>(nums);
  let max = 0;
  for (let currNum of set) {
    if (set.has(currNum - 1)) {
      continue;
    }
    let num = currNum;
    while (set.has(num + 1)) {
      num = num + 1;
    }
    max = Math.max(max, num - currNum + 1);
  }

  return max;
};