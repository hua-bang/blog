function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const resArr: number[][] = [];
  const arr: number[] = [];
  function backTracking(
    targetNum: number, 
    startIndex: number,
  ) {
    if(targetNum === 0) {
      resArr.push([...arr]);
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
      backTracking(targetNum - candidates[i], i + 1);
      arr.pop();
    }
  }
  backTracking(target, 0);
  return resArr;
};