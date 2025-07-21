// 思路：从后往前遍历
// 复杂度：时间复杂度 O(n), 空间复杂度 O(1)
function lengthOfLastWord(s: string): number {
  let index = s.length - 1, count = 0;

  while (s[index] === ' ') {
    index--;
  }

  while (index >= 0 && s[index] !== ' ') {
    index--;
    count++;
  }

  return count;
};