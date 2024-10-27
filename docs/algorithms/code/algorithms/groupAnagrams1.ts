function groupAnagrams(strs: string[]): string[][] {
  let map: Record<string, string[]> = {};  

  for(let str of strs) {
    const hashKey = [...str].sort().join("");
    if(!map[hashKey]) {
      map[hashKey] = [];
    }
    map[hashKey].push(str);
  }

  return Object.values(map);
};