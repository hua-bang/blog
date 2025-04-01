// 思路：通过深度优先和回溯来实现，当 target 为 0 的时候，说明可以直接塞入。
// 当 target 小于 0 的时候，说明已经超过了，需要回溯。
// 当 arr 长度大于 k 的时候，说明已经超过了，需要回溯。
// 复杂度分析: 时间复杂度 O(C(9,k) * k) 空间复杂度 O(k)
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startIndex: number, target: number) => {
    if(target === 0 && arr.length === k) {
      res.push([...arr]);
      return;
    }

    if(target < 0 || arr.length >= k) {
      return;
    }

    for(let i = startIndex; i <= 9; i++) {
      arr.push(i);
      backtrack(i + 1, target - i);
      arr.pop();
    }
  }

  backtrack(1, n);
  return res;
};