function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (index: number) => {
    if(arr.length === k) {
      res.push([...arr]);
      return;
    }

    for(let i = index; i <= n; i++) {
      arr.push(i);
      backtrack(i + 1);
      arr.pop();
    }
  }

  backtrack(1);
  return res;  
};