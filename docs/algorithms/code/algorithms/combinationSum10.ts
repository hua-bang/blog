function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startIndex: number, targetNum: number) => {
    if(targetNum === 0) {
      res.push([...arr]);
      return;
    }

    if(targetNum < 0 ) {
      return;
    }

    for(let i = startIndex; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(i, targetNum - candidates[i]);
      arr.pop();
    }
  } 

  backtrack(0, target);

  return res; 
};