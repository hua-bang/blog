function generateParenthesis(n: number): string[] {
  const res: string[] = [];

  const dfs = (str: string, left: number, right: number) => {
    if(str.length === 2 * n) {
      res.push(str);
      return;
    }

    if (left < n) {
      dfs(`${str}(`, left + 1, right);
    }

    if(right < left) {
      dfs(`${str})`, left, right + 1);
    }
  }

  dfs("", 0, 0);

  return res;  
};