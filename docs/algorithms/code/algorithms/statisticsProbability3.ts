function statisticsProbability(num: number): number[] {
  let dp: number[] = new Array(6).fill(1 / 6);

  if (num < 2) {
    return dp;
  }

  for (let i = 2; i <= num; i++) {
    const temp = new Array(6 * i - i + 1).fill(0);

    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += dp[j] * (1 / 6);
      }
    }
    dp = temp;
  }

  return dp;
}
