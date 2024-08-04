function jewelleryValue(frame: number[][]): number {
  if (!frame.length || !frame[0].length) {
    return 0;
  }

  const n = frame.length,
    m = frame[0].length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(m).fill(0));
  dp[0][0] = frame[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + frame[i][0];
  }

  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + frame[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j] + frame[i][j],
        dp[i][j - 1] + frame[i][j]
      );
    }
  }

  return dp[n - 1][m - 1];
}

console.log(
  jewelleryValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
