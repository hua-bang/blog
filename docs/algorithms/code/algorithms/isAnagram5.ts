function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) {
    return false;
  }

  const map: Record<string, number> = {};
  for(let i = 0; i < s.length; i++) {
    if(map[s[i]] === undefined) {
      map[s[i]] = 0;
    }
    map[s[i]] = map[s[i]] + 1;
  }

  for(let i = 0; i < t.length; i++) {
    if(!map[t[i]]) {
      return false;
    }
    map[t[i]] = map[t[i]] - 1; 
  }

  return true;
};