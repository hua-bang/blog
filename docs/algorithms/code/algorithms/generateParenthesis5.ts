function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  const backtrack = (prefix: string, left: number, right: number) => {
    if (left + right >= 2 * n) {
      res.push(prefix);
      return;
    }

    if (left < n) {
      backtrack(`${prefix}(`, left + 1, right);
    }

    if (right < left) {
      backtrack(`${prefix})`, left, right + 1);
    }
  };

  backtrack('', 0, 0);

  return res;
};