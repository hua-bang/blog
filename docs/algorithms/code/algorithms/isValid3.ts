function isValid(s: string): boolean {
  const stack: string[] = [];

  const map = {
    "}": "{",
    "]": "[",
    ")": "("
  };

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const val = stack.pop();
      if (map[s[i]] !== val) {
        return false;
      }
    }
  }

  return stack.length === 0;
};