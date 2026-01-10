// 双指针法 时间复杂度 O(n) 空间复杂度 O(n)
function isPalindrome(x: number): boolean {
  const s = String(x);

  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};