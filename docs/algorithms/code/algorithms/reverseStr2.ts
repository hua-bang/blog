// 概述： 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
// 思路： 双指针， 一次遍历， 每次遍历2k个字符， 反转前k个字符
// 复杂度分析： 时间复杂度：O(n)，其中 n 是字符串 s 的长度。 空间复杂度：O(n)。
function reverseStr(s: string, k: number): string {
  const arr = [...s];  
  for(let i = 0; i < s.length; i = i + 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, s.length - 1);
    reverseArr(arr, left, right);
  }
  return arr.join("");
};

const reverseArr = (arr: string[], left: number, right: number) => {
  while(left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}