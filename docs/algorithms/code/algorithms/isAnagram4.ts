// 概述：需要判断两个字符串的长度是否相等，如果不相等，则直接返回 false。
// 思路：
// 1. 首先判断两个字符串的长度是否相等，如果不相等，则直接返回 false。
// 2. 使用哈希表进行字符统计，遍历第一个字符串，将每个字符出现的次数存储在哈希表中。
// 3. 遍历第二个字符串，对于每个字符，在哈希表中查找对应的次数，如果不存在或次数为 0，则直接返回 false。
// 时间复杂度为 O(n + n) ==> O(n), 空间复杂度为 O(26) ==> O(1)

function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};
  for(let i = 0; i < s.length; i++) {
    if(map[s[i]] === undefined) {
      map[s[i]] = 0;
    }
    map[s[i]] = map[s[i]] + 1;
  }

  for(let i = 0; i < t.length; i++) {
    if(!map[t[i]]) {
      return false;
    }
    map[t[i]] = map[t[i]] - 1; 
  }

  return true;
};