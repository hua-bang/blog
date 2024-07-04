function wordPattern(pattern: string, s: string): boolean {
  const strArr = s.split(" ");

  if (pattern.length !== strArr.length) {
    return false;
  }
  const map: Record<string, string> = {};
  const map2 = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) {
      if (map2.get(strArr[i]) && map2.get(strArr[i]) !== pattern[i]) {
        return false;
      }

      map[pattern[i]] = strArr[i];
      map2.set(strArr[i], pattern[i]);
      continue;
    }

    if (map[pattern[i]] !== strArr[i]) {
      return false;
    }
  }

  return true;
}
