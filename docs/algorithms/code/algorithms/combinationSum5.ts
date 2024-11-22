function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const backtrack = (arr: number[], targetNum: number, index: number) => {
    if (targetNum === 0) {
      res.push([...arr]);
      return;
    }

    if (targetNum < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      backtrack([...arr, candidates[i]], targetNum - candidates[i], i);
    }
  }

  backtrack([], target, 0);
  return res;
};