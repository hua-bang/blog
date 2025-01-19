function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (startIndex: number, targetNum: number) => {
    if(targetNum === 0) {
      res.push([...arr]);
      return;
    }

    if(targetNum < 0) {
      return;
    }

    for(let i = startIndex; i < candidates.length; i++) {
      if(i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      arr.push(candidates[i]);
      backtrack(i + 1, targetNum - candidates[i]);
      arr.pop();
    }
  }

  backtrack(0, target);

  return res;  
};