function firstUniqChar(s: string): number {
  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
