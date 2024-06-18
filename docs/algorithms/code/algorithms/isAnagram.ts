function isAnagram(s: string, t: string): boolean {
  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false;
    }
    map[t[i]] -= 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      return false;
    }
  }

  return true;
}
