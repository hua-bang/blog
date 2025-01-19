function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startIndex: number, targetNum: number) => {
    if (targetNum === 0) {
      res.push([...arr]);
      return;
    }

    if(targetNum < 0) {
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


function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] =[];
  const arr: number[] = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (targetSum: number, index: number) => {
    if(targetSum === 0) {
      res.push([...arr]);
      return;
    }
    if(targetSum < 0) {
      return;
    }

    for(let i = index ; i < candidates.length; i++) {
      if(i > index && candidates[i] === candidates[i - 1]) {
        continue;
      }
      arr.push(candidates[i]);
      backtrack(targetSum - candidates[i], i + 1);
      arr.pop();
    }
  }

  backtrack(target, 0);
  return res;
};