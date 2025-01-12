function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  const backtrack = (start: number, prevArr: number[]) => {
    if (prevArr.length === k) {
      res.push(prevArr.slice());
      return;
    }

    for (let i = start; i <= n; i++) {
      prevArr.push(i);
      backtrack(i + 1, prevArr);
      prevArr.pop();
    }
  }

  backtrack(1, []);

  return res;
};

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  const nums: number[] = [];

  const backtrack = (start: number) => {
    if (nums.length === k) {
      res.push([...nums]);
      return;
    }

    for (let i = start; i <= n; i++) {
      nums.push(i);
      backtrack(i + 1);
      nums.pop();
    }
  }

  backtrack(1);
  return res;
};