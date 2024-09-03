/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}
