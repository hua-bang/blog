// 思路：哈希表
// 复杂度：时间复杂度O(n), 空间复杂度O(n)
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++) {
    const currChar = magazine[i];
    if (!map[currChar]) {
      map[currChar] = 1;
    } else {
      map[currChar] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const currChar = ransomNote[i];

    if (!map[currChar]) {
      return false;
    }

    map[currChar] -= 1;
  }

  return true;
};