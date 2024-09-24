function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let a = 0,
    b = 0,
    c = 0;

  for (let i = 1; i < n; i++) {
    let valA = dp[a] * 2;
    let valB = dp[b] * 3;
    let valC = dp[c] * 5;

    const val = Math.min(valA, valB, valC);

    if (val === valA) {
      a++;
    }

    if (val === valB) {
      b++;
    }

    if (val === valC) {
      c++;
    }

    dp[i] = val;
  }

  return dp[n - 1];
}
