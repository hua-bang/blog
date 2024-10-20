function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const dfs = (remaining: number, combination: number[], start: number) => {
    if (remaining === 0) {
      res.push([...combination]);
      return;
    }

    if (remaining < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      dfs(remaining - candidates[i], combination, i);
      combination.pop();
    }

  }

  dfs(target, [], 0) 

  return res;
};