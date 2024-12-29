function isValid(s: string): boolean {
  const stack: string[] = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  for (let char of s) {
    if ([")", "}", "]"].includes(char)) {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};