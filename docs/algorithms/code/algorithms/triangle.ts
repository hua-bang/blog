function generate(numRows: number): number[][] {
  const dp: number[][] = [[1]];

  for(let i = 1; i < numRows; i++) {
    const result: number[] = [];
    result[0] = 1;
    result[i] = 1;
    for(let index = 1; index < i; index++) {
      result[index] = dp[i -1][index - 1] + dp[i - 1][index];
    }
    dp.push(result);
  }
  
  return dp;
};