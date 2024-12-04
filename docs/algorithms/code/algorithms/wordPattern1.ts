function wordPattern(pattern: string, s: string): boolean {
  const map1 = new Map<string, string>();
  const map2 = new Map<string, string>();

  let arr = s.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i], arrItem = arr[i];
    if (
      (map1.has(p) && map1.get(p) !== arrItem) ||
      (map2.has(arrItem) && map2.get(arrItem) !== p)
    ) {
      return false;
    }
    map1.set(p, arrItem);
    map2.set(arrItem, p);
  }

  return true;
};