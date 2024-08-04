function crackNumber(ciphertext: number): number {
  const s = String(ciphertext);
  if (s.length === 0) {
    return 0;
  }

  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    dp[i] += dp[i - 1];
    if (
      i > 1 &&
      Number(s.slice(i - 2, i)) >= 10 &&
      Number(s.slice(i - 2, i)) <= 25
    ) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
