// 思路：指针遍历，每次取 left 到 right 之间的字符串(左开右闭)，插入到数组的头部，指针指向 right
// 复杂度分析： 时间复杂度 O(n) 空间复杂度 O(n)
function reverseWords(s: string): string {
  s = s.trim();
  let index = 0;

  let str = "";

  while(index < s.length) {
    while(s[index] === " " && index < s.length) {
      index++;
    }

    if(index === s.length) {
      break;
    }

    let left = index, right = left;
    while(s[right] !== " " && right < s.length) {
      right++;
    }

    const currStr = s.slice(left, right);
    str = currStr + " " + str;
    index = right;
  }

  return str.trim();
};