function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [], n = candidates.length;

  const backtrack = (targeNumber: number, combineArr: number[], index: number) => {
    if (targeNumber === 0) {
      res.push([...combineArr]);
      return;
    }

    if(targeNumber < 0) {
      return;
    }

    for(let i = index; i < n; i++) {
      const val = candidates[i];
      combineArr.push(val);
      backtrack(targeNumber - candidates[i], combineArr, i);
      combineArr.pop();
    }
  }

  backtrack(target, [], 0);
  return res;
};