function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let s = String(x);

  let left = 0, right = s.length - 1;

  while(left <= right) {
    if(s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};