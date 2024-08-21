function statisticsProbability(num: number): number[] {
  // 初始化 dp
  let dp = new Array(6).fill(1 / 6);

  // 如果只有一个色子，则直接返回
  if (num < 2) {
    return dp;
  }

  for (let i = 2; i <= num; i++) {
    const temp = new Array(5 * i + 1).fill(0);
    for (let j = 0; j < dp.length; j++) {
      for (let k = 0; k < 6; k++) {
        temp[j + k] += (dp[j] * 1) / 6;
      }
    }
    dp = temp;
  }

  return dp;
}
