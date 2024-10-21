function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const dfs = (targetNum: number, combineArr: number[], index: number) => {
    if(targetNum === 0) {
      res.push([...combineArr]);
      return;
    }

    if(targetNum < 0) {
      return;
    }

    for(let i = index; i < candidates.length; i++) {
      combineArr.push(candidates[i]);
      dfs(targetNum - candidates[i], combineArr, i);
      combineArr.pop();
    }
  };

  dfs(target, [], 0);
  return res;
};