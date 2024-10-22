function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  const backtrack = (str: string, left: number, right: number) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    if(left < n) {
      backtrack(`${str}(`, left + 1, right)
    }

    if(left > right) {
      backtrack(`${str})`, left, right + 1)
    }
  }

  backtrack('', 0, 0);

  return res; 
};