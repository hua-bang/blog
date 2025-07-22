// 思路：双指针，一个指向 s，一个指向 t，当 s 的字符和 t 的字符相等时，s 的指针往后移动，t 的指针往后移动，否则，t 的指针往后移动
// 时间复杂度O(n), 空间复杂度O(1)
function isSubsequence(s: string, t: string): boolean {
  let index1 = 0, index2 = 0;

  while (index1 < s.length && index2 < t.length) {
    if (s[index1] === t[index2]) {
      index1++;
    }
    index2++;
  }

  return index1 >= s.length;
};