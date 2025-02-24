// 思路：哈希表记录，遍历一遍，一遍记录，一遍判断
// 复杂度分析： 时间复杂度 O(n), 空间复杂度 O(1)
function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};
  for(let i = 0; i < magazine.length; i++) {
    const word = magazine[i];
    if(map[word] === undefined) {
      map[word] = 0;
    }
    map[word]++;
  }
  
  for(let i = 0; i < ransomNote.length; i++) {
    const word = ransomNote[i];
    if(!map[word]) {
      return false;
    }
    map[word]--;
  }

  return true;
};