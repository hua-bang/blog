function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }

  let maxLength = 0;
  let left = 0;
  const charIndexMap: { [key: string]: number } = {};

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= left
    ) {
      left = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
