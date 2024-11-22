function letterCombinations(digits: string): string[] {
  if (!digits) {
    return [];
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

  const dfs = (prefix: string, nextDigits: string) => {
    if (!nextDigits) {
      res.push(prefix);
      return;
    }

    const [firstDigit, ...restDight] = nextDigits;
    const arr = map[firstDigit];
    if (!arr.length) {
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      dfs(`${prefix}${arr[i]}`, restDight.join(""));
    }
  }


  dfs('', digits);

  return res;
};