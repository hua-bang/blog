function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};

  for (let char of s) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  for (let char of t) {
    if (!map[char]) {
      return false
    }
    map[char]--;
  }

  Object.keys(map).forEach(key => {
    if (map[key] > 0) {
      return false;
    }

  });

  return true;
}