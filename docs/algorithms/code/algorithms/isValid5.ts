function isValid(s: string): boolean {
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  const stack: string[] = [];

  for(let i = 0; i < s.length; i++) {
    const curr = s[i];
    if(["(", "[","{"].includes(curr)) {
      stack.push(curr);
      continue;
    }

    if(stack[stack.length - 1] !== map[curr]) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
};