function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (startIndex: number) => {
    // 当 arr 长度 为 k 的时候，说明可以直接塞入。
    if(arr.length === k) {
      res.push([...arr]);
      return;
    }

    

    // 需要从 startIndex 开始，为什么？因为这里是组合，startIndex 已经是选择过的数了
    // 可以做剪枝，当 arr 长度加上剩余的长度小于 k 的时候，就不需要再继续了, 反之继续
    // 即 arr.length + n - i + 1 >= k --> i <= n - (k - arr.length) + 1

    for(let i = startIndex; i <= n - (k - arr.length) + 1; i++) {
      arr.push(i);
      backtrack(i + 1);
      arr.pop();
    }
  }

  backtrack(1);

  return res;  
};