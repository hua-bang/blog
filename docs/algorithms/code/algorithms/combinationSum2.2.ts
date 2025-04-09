function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (index: number, target: number) => {
    if (target === 0) {
      res.push([...path]);
      return;
    }

    if (target <= 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }

      const curr = candidates[i];
      path.push(curr);
      backtrack(i + 1, target - curr);
      path.pop();
    }
  }

  backtrack(0, target);
  return res;
};