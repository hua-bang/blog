function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let str of strs) {
    let arr = Array.from(str).sort();
    let key = arr.toString();
    let list: string[] = map.get(key) ? map.get(key) : new Array<string>();
    list.push(str);
    map.set(key, list);
  }

  return [...map.values()];
}
