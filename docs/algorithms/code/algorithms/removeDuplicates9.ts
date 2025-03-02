// 思路：遍历字符串，若当前字符与栈顶字符相同则出栈，否则入栈
// 复杂度：时间复杂度O(n)，空间复杂度O(n)
function removeDuplicates(s: string): string {
  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const val = s[i];
    if(val === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(val);
    }
  }

  return stack.join("");
};