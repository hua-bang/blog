function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res: number[][] = [];
  const path: number[] = [];
  
  const backtrack = (startIndex: number, target: number) => {
    if (target === 0) {
      res.push([...path]);
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      const currVal = candidates[i];
      path.push(currVal);
      backtrack(i + 1, target - currVal);
      path.pop();
    }
  }

  backtrack(0, target);
  return res;
};