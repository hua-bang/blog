function statisticsProbability(num: number): number[] {
  let dp = new Array(6).fill(1 / 6);

  if (num < 2) {
    return dp;
  }

  for (let i = 2; i <= num; i++) {
    // 这里来个 5n + 1 (6n - n + 1)
    const temp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] / 6;
      }
    }
    dp = temp;
  }

  return dp;
}
