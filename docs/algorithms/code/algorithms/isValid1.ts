function isValid(s: string): boolean {
  const res: string[] = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for(let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (map[curr] && map[curr] === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(curr);
    }
  }

  return res.length === 0;
};