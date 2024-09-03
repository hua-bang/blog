function checkWord(str: string) {
  const reg = /[a-zA-Z0-9]/;
  if (!reg.exec(str)) {
    return false;
  }
  return true;
}

function isPalindrome(s: string): boolean {
  const str = s.trim();
  if (str === "") {
    return true;
  }

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    while (left < right && !checkWord(str[left])) {
      left++;
    }

    while (left < right && !checkWord(str[right])) {
      right--;
    }

    if (left === right) {
      break;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
