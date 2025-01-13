// 概述：组合总和
// 思路：回溯法
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  const arr: number[] = [];

  const backtrack = (targetNum: number, index: number) => {
    if(targetNum === 0) {
      res.push([...arr]);
      return;
    }

    if(targetNum < 0) {
      return;
    }

    for(let i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(targetNum - candidates[i], i);
      arr.pop();
    }
  }

  backtrack(target, 0);
  return res;  
};