// 思路：使用哈希表记录，遍历两边，一遍记录，一遍是判断
// 复杂度分析： 时间复杂度 O(n), 空间复杂度 O(1) 字符集 26
function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};

  for(let i = 0; i < s.length; i++) {
    const word = s[i];
    if(map[word] === undefined) {
      map[word] = 0;
    }
    map[word]++;
  }

  for(let i = 0; i < t.length; i++) {
    const word = t[i];
    if(!map[word]) {
      return false
    }
    map[word]--;
  }

  return true;
};