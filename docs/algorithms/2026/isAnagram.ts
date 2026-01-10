// 哈希表 时间复杂度 O(n) 空间复杂度 O(n)
// 思路：用哈希表记录字符串中每个字符出现的次数，然后对比两个字符串中每个字符出现的次数是否相同
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    }

    map[t[i]]--;
  }

  return true;
};