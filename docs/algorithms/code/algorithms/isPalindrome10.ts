function isPalindrome(x: number): boolean {
  const str = String(x);
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};