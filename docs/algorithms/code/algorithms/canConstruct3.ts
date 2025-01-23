function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for(let i = 0; i < magazine.length; i++) {
    if(map[magazine[i]] === undefined) {
      map[magazine[i]] = 0;
    }
    map[magazine[i]] = map[magazine[i]] + 1;
  }

  for(let i = 0; i < ransomNote.length; i++) {
    if(!map[ransomNote[i]]) {
      return false;
    }
    map[ransomNote[i]] = map[ransomNote[i]] - 1;
  }

  return true;
};