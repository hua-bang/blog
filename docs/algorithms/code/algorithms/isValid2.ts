function isValid(s: string): boolean {
  const stack: string[] = [];

  const strMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const val = stack.pop();
      if (!val || strMap[s[i]] !== val) {
        return false;
      }
    }
  }

  return stack.length === 0;
};