// 思路： 采用哈希表，通过某种方式将字母映射成一个值，然后进行分组
function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (let str of strs) {
    const hash = getHashCode(str);
    if (!map[hash]) {
      map[hash] = [];
    }
    map[hash].push(str);
  }

  return Object.values(map);
};

function getHashCode(str: string): string {
  const count = new Array(26).fill(0);
  for (let char of str) {
    count[char.charCodeAt(0) - 97]++;
  }

  return count.join('-');
}