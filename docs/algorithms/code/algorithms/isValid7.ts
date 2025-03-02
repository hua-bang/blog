// 思路：遍历字符串，遇到左括号入栈，遇到右括号出栈，判断是否匹配
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
function isValid(s: string): boolean {
  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  }

  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const val = s[i];
    if([")", "}", "]"].includes(val)) {
      if(stack[stack.length - 1] !== map[val]) {
        return false;
      }
      stack.pop();
      continue;
    }

    stack.push(val);
  }

  return stack.length === 0;
};