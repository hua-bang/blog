// 思路：通过哈希表，并且通过双层循环去做，时间复杂度为 O(n)
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);

  let maxLength = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = currentLength > maxLength ? currentLength : maxLength;
    }
  }

  return maxLength;
};