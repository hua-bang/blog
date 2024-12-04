function isIsomorphic(s: string, t: string): boolean {
  const map1: Record<string, string> = {};
  const map2: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const sVal = s[i], tVal = t[i];
    if (
      (map1[sVal] && map1[sVal] !== tVal) ||
      (map2[tVal] && map2[tVal] !== sVal)
    ) {
      return false;
    }
    map1[sVal] = tVal;
    map2[tVal] = sVal;
  }

  return true;
};