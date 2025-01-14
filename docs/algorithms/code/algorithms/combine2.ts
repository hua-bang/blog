// 那么组合问题和分割问题都是收集树的叶子节点，而子集问题是找树的所有节点！
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startIndex: number) => {
    if(arr.length === k) {
      res.push([...arr]);
      return;
    }

    for(let i = startIndex; i <= n; i++) {
      arr.push(i);
      backtrack(i + 1);
      arr.pop();
    }
  }

  backtrack(1);

  return res;  
};