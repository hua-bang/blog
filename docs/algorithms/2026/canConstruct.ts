// 哈希表 时间复杂度 O(n) 空间复杂度 O(n)
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) {
    return false;
  }

  const map: Record<string, number> = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] === undefined) {
      map[magazine[i]] = 0;
    }
    map[magazine[i]]++;
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map[ransomNote[i]]) {
      return false;
    }
    map[ransomNote[i]]--;
  }

  return true;
};