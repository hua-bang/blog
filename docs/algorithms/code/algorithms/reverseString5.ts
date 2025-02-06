// 思路：双指针，两段逼近。
// 复杂度分析： 时间复杂度 O(n)，空间复杂度 O(1)。
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