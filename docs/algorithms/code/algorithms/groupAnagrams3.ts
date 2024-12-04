function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (let str of strs) {
    const key = [...str].sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.values(map);
};