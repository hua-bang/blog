// 思路：使用两个哈希表
// 复杂度：时间复杂度 O(n)，空间复杂度 O(n)
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map1: Record<string, string> = {};
  const map2: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i], tChar = t[i];
    if (
      (map1[sChar] && map1[sChar] !== tChar)
      ||
      (map2[tChar] && map2[tChar] !== sChar)
    ) {
      return false;
    }

    map1[sChar] = tChar;
    map2[tChar] = sChar
  }

  return true;
};