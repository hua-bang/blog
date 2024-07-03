function isIsomorphic(s: string, t: string): boolean {
  const map: Record<string, string> = {};
  const recordStr: string[] = [];

  const length = s.length;

  for (let i = 0; i < length; i++) {
    const sChar = s[i],
      tChar = t[i];
    if (!map[sChar]) {
      if (recordStr.includes(tChar)) {
        return false;
      }

      map[sChar] = tChar;
      recordStr.push(tChar);
      continue;
    }

    if (map[sChar] !== tChar) {
      return false;
    }
  }

  return true;
}

const res = isIsomorphic("badc", "baba");

console.log("res", res);
