// 思路：使用指针，遍历字符串，遇到空格，将空格前面的字符串加入数组，然后将指针移动到空格后面，继续遍历，直到遍历完整个字符串
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
function reverseWords(s: string): string {
  s = s.trim();

  const arr: string[] = [];
  let index = 0;

  while (index < s.length) {
    while (s[index] === " " && index < s.length) {
      index++;
    }

    if (index >= s.length) {
      break;
    }

    let leftIndex = index, rightIndex = index;
    while (s[rightIndex] !== ' ' && rightIndex < s.length) {
      rightIndex++;
    }
    arr.unshift(s.slice(leftIndex, rightIndex));
    index = rightIndex;
  }

  return arr.join(" ");
};