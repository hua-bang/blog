function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};

  for (let word of magazine) {
    if (map[word] === undefined) {
      map[word] = 0;
    }

    map[word]++;
  }

  for (let word of ransomNote) {
    if (!map[word]) {
      return false;
    }

    map[word]--;
  }

  return true;
};