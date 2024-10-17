function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
  }

  const res: string[] = [];
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

  const dfs = (str: string, digits: string) => {
    if(!digits) {
      if(str) {
        res.push(str);
      }
      return;
    }

    const nextDigit = digits[0];
    const nextStrArr = map[nextDigit] || [];

    nextStrArr.forEach((word) => {
      dfs(str + word, digits.slice(1));
    });
  };

  dfs('', digits);
  return res;
};