// 思路：整体回溯，注意两个点
// 1. 回溯模版： startNum 开始的 num，prevSum 上一次组合值
// 2. 推出条件： arr.length === k && prevSum === n
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startNum: number, prevSum: number) => {
    if(arr.length === k && prevSum === n) {
      res.push([...arr]);
      return;
    }

    for(let i = startNum; i <= 9; i++) {
      arr.push(i);
      backtrack(i + 1, prevSum + i);
      arr.pop();
    }
  }

  backtrack(1, 0);
  return res;
};