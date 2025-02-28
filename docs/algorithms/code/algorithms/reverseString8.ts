// 思路：采用双指针，一个指向头部，一个指向尾部，交换两个指针指向的元素，然后两个指针向中间移动，直到两个指针相遇
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
function reverseString(s: string[]): void {
  let left = 0, right = s.length - 1;

  while(left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}