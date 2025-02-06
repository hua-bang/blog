// 思路：双指针，首先确认 left，然后去进行 right 的匹配。
// 复杂度分析： 时间复杂度 O(n)，空间复杂度 O(n)。
function reverseWords(s: string): string {
  s = s.trim();
  if(!s.length) {
    return "";
  }

  let index = 0;
  const arr: string[] = [];

  while(index < s.length) {
    while(index < s.length && s[index] === " ") {
      index++;
    }

    if(index >= s.length) {
      break;
    }

    let left = index, right = index + 1;
    while(right < s.length && s[right] !== " ") {
      right++;
    }

    arr.unshift(
      s.substring(
        left,
        right
      )
    );
    index = right;
  }

  return arr.join(" ");
};