function letterCombinations(digits: string): string[] {
  if(!digits) {
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

  const dfs = (nextDigits: string, preStr: string) => {
    if(!nextDigits) {
      res.push(preStr);
      return;
    }

    const currDigit = nextDigits[0];
    const restDigit = nextDigits.slice(1);
    const strArr = map[currDigit] || [];

    for(let i = 0; i < strArr.length; i++) {
      const currWord = strArr[i];
      dfs(restDigit, `${preStr}${currWord}`);
    }
  }

  dfs(digits, '')

  return res;
};