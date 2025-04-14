function integerBreak(n: number): number {
  if (n <= 3) {
    return n - 1;
  }

  const dp: number[] = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      const product1 = j * (i - j);
      const product2 = j * dp[i - j];
      dp[i] = Math.max(dp[i], product1, product2);
    }
  }

  return dp[n];
};