// 思路：使用指针，遍历字符串，遇到空格，将空格前面的字符串加入数组，然后将指针移动到空格后面，继续遍历，直到遍历完整个字符串
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
function reverseWords(s: string): string {
  s = s.trim();
  let index = 0;
  const arr: string[] = [], n = s.length;

  while(index < n) {
    while(s[index] === " " && index < n) {
      index++;
    }

    if(index >= n) {
      break;
    }

    let start = index, end = index;
    while(s[end] !== " " && end < n) {
      end++;
    }
    arr.unshift(s.slice(start, end));
    index = end;
  }
  return arr.join(" ");
};