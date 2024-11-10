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

  const dfs = (preStr: string, digits: string) => {
    if (!digits) {
      res.push(preStr);
      return;
    };

    const [first, resetDigits] = digits;
    const arr = map[first];
    for (let i = 0; i < arr.length; i++) {
      dfs(`${preStr}${arr[i]}`, resetDigits);
    }
  }

  dfs('', digits);

  return res;
};