function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  const backtrack = (preStr: string, left: number, right: number) => {
    if (preStr.length >= 2 * n) {
      res.push(preStr);
      return;
    }

    if (left < n) {
      backtrack(`${preStr}(`, left + 1, right);
    }

    if (right < left) {
      backtrack(`${preStr})`, left, right + 1);
    }
  };


  backtrack('', 0, 0);
  return res;
};