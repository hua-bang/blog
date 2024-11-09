function generate(numRows: number): number[][] {
  const res: number[][] = [], n = numRows;

  for (let i = 0; i < n; i++) {
    const length = i + 1;
    const levelNums = new Array(length).fill(0);
    levelNums[0] = 1, levelNums[length - 1] = 1;

    for (let index = 1; index < length - 1; index++) {
      levelNums[index] = res[i - 1][index] + res[i - 1][index - 1]
    }

    res[i] = levelNums;
  }

  return res;
};