// 概述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 思路：使用栈，遇到左括号就入栈，遇到右括号就出栈，如果出栈的括号和当前括号不匹配，就返回false
// 复杂度分析: 时间复杂度 O(n)，空间复杂度 O(n)
function isValid(s: string): boolean {
  const map: Record<string, string> = {
    "}": "{",
    ")": "(",
    "]": "{"
  };

  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const word = s[i];
    if([")", "}", "]"].includes(word)) {
      if(stack.pop() !== map[word]) {
        return false;
      }
    } else {
      stack.push(word);
    }
  }

  return stack.length === 0;
};