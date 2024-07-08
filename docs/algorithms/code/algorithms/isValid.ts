function isValid(s: string): boolean {
  const stack: string[] = [];

  const map: Record<string, any> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return Boolean(stack.length === 0);
}

console.log(isValid("()"));
