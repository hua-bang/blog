function crackNumber(ciphertext: number): number {
  if (ciphertext === 0) {
    return 1;
  }

  const s = String(ciphertext);
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    dp[i] += dp[i - 1];

    if (
      i > 1 &&
      Number(s.slice(i - 2, i)) >= 10 &&
      Number(s.slice(i - 2, i)) < 26
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}
