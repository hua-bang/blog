// 思路：使用哈希表存储
// 复杂度：时间复杂度 O(m * n), 空间复杂度 O(n)
function getHashCode(str: string): string {
  const count = new Array(26).fill(0);
  for (let char of str) {
    count[char.charCodeAt(0) - 97]++;
  }

  return count.join('-');
}

function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (let str of strs) {
    const key = getHashCode(str);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.values(map);
};