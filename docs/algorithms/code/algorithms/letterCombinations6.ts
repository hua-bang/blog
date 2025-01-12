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

  const backtrack = (restStr: string, prevStr: string) => {
    if (!restStr.length) {
      res.push(prevStr);
      return;
    }

    const nextStrArr = map[restStr[0]] as string[];
    const nextRestStr = restStr.slice(1);

    for (let i = 0; i < nextStrArr.length; i++) {
      backtrack(nextRestStr, `${prevStr}${nextStrArr[i]}`);
    }
  }

  backtrack(digits, "");

  return res;
};