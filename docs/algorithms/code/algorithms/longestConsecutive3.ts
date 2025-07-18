// 思路：采用哈希表，双层循环，但是时间复杂度为 O(n)
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(n)
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);

  let maxLength = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}