// 思路：滑动窗口
// 复杂度：时间复杂度O(n), 空间复杂度O(1)
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }


  let left = 0, right = 0, maxLength = 0, charIndexMap: Record<string, number> = {};

  while (right < s.length) {
    const currChar = s[right];

    if (charIndexMap[currChar] !== undefined && charIndexMap[currChar] >= left) {
      left = charIndexMap[currChar] + 1;
    }

    charIndexMap[currChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};