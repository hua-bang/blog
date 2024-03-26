// 时间 O(n)
// 空间 O(n)
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const str = String(x);

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

// 时间 O(n)
// 空间 O(1)
function isPalindrome2(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber: number = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}
