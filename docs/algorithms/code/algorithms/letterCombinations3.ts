function letterCombinations(digits: string): string[] {
  if(!digits) {
    return []
  }

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  const res: string[] = [];

  const dfs = (str: string, digits: string) => {
    if (!digits) {
      res.push(str);
      return;
    }

    const nextDigit = digits[0];
    const strs = map[nextDigit] || [];

    for(let strItem of strs) {
      dfs(`${str}${strItem}`, digits.slice(1));
    }
  }

  dfs("", digits);
  return res;
};