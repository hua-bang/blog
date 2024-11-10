function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [], n = candidates.length;
  const backtrack = (selectArr: number[], targetNumber: number, index: number) => {
    if (targetNumber === 0) {
      res.push([...selectArr]);
      return;
    }

    if (targetNumber < 0) {
      return;
    }

    for (let i = index; i < n; i++) {
      backtrack([...selectArr, candidates[i]], targetNumber - candidates[i], i);
    }
  }

  backtrack([], target, 0);
  return res;
};