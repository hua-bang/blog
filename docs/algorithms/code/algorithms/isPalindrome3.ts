function checkWord(str: string) {
  const reg = /[a-zA-Z0-9]/;
  if (!reg.exec(str)) {
    return false;
  }
  return true;
}

function isPalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (left < right && !checkWord(s[left])) {
      left++;
    }

    while (left < right && !checkWord(s[right])) {
      right--;
    }

    if (left === right) {
      break;
    }

    if (s[left].toUpperCase() !== s[right].toUpperCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
