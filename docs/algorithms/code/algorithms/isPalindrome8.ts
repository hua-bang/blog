// 思路：双指针，一个从前往后，一个从后往前，遇到非字母数字的字符，就跳过，否则就比较 
// 时间复杂度：O(n), 空间复杂度 O(1)
function checkWord(str: string) {
  const reg = /[a-zA-Z0-9]/;
  if (!reg.exec(str)) {
    return false;
  }
  return true;
}

function isPalindrome(s: string): boolean {
  let leftIndex = 0, rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    while (leftIndex < rightIndex && !checkWord(s[leftIndex])) {
      leftIndex++;
    }
    while (leftIndex < rightIndex && !checkWord(s[rightIndex])) {
      rightIndex--;
    }

    if (leftIndex >= rightIndex) {
      return true;
    }

    if (s[leftIndex].toLocaleLowerCase() !== s[rightIndex].toLocaleLowerCase()) {
      return false;
    }

    leftIndex++;
    rightIndex--;
  }

  return true;
};