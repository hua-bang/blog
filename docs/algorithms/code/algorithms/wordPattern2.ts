// 思路：使用两个哈希表
// 复杂度：时间复杂度 O(n)，空间复杂度 O(n)
function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(" ");
  if (sArr.length !== pattern.length) {
    return false;
  }
  const map1 = new Map<string, string>();
  const map2 = new Map<string, string>();

  for (let i = 0; i < pattern.length; i++) {
    const currChar = pattern[i], currWord = sArr[i];
    if (
      (map1.has(currChar) && map1.get(currChar) !== currWord)
      ||
      (map2.has(currWord) && map2.get(currWord) !== currChar)
    ) {
      return false;
    }
    map1.set(currChar, currWord);
    map2.set(currWord, currChar);
  }

  return true;
};