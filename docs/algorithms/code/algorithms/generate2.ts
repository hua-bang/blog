function generate(numRows: number): number[][] {
  const res: number[][] = [], n = numRows;

  for (let i = 0; i < n; i++) {
    const length = i + 1;
    const arr = new Array(length).fill(0);

    arr[0] = 1;
    arr[arr.length - 1] = 1;

    for (let index = 1; index < arr.length - 1; index++) {
      arr[index] = res[i - 1][index - 1] + res[i - 1][index];
    }

    res.push(arr);
  }

  return res;
};