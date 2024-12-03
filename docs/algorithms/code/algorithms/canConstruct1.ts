function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
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