function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  const backtrack = (startIndex: number, target: number) => {
    if(target === 0) {
      res.push([...path]);
      return;
    }

    if(target < 0) {
      return;
    }
    
    for(let i = startIndex; i < candidates.length; i++) {
      const currVal = candidates[i];
      path.push(currVal);
      backtrack(i, target - currVal);
      path.pop();
    }
  };

  backtrack(0, target);
  return res;
};