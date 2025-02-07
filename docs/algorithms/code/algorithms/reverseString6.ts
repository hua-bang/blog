// 概述：反转字符串
// 思路：通过双指针，交换左右指针的值，然后左指针右移，右指针左移
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0, right = s.length - 1;
  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};