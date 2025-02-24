// 思路：使用哈希表记录第一个字符串中字符出现的次数，然后遍历第二个字符串进行验证
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)， 因为字符集大小是固定的
function intersection(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const map: Record<number, number> = {};

  for (let i = 0; i < nums1.length; i++) {
    const word = nums1[i];
    if (map[word] === undefined) {
      map[word] = 0;
    }
    map[word]++;
  }

  for (let i = 0; i < nums2.length; i++) {
    const word = nums2[i];
    if (map[word]) {
      if (!res.includes(word)) {
        res.push(word);
      }
      map[word]--;
    }
  }

  return res;
};