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

  const backtrack = (nextDigits: string, prevDigits: string) => {
    if(!nextDigits.length) {
      res.push(prevDigits);
      return;
    }

    const restNextDigits = nextDigits.slice(1);
    const nextStrArr = map[nextDigits[0]];

    nextStrArr.forEach((str) => {
      backtrack(restNextDigits, `${prevDigits}${str}`);
    });

  };

  backtrack(digits, "");
  return res; 
};