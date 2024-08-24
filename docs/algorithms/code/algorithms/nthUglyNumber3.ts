function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let a = 0,
    b = 0,
    c = 0;

  for (let i = 1; i < n; i++) {
    const valA = dp[a] * 2;
    const valB = dp[b] * 3;
    const valC = dp[c] * 5;

    const val = Math.min(valA, valB, valC);
    if (valA === val) {
      a++;
    }

    if (valB === val) {
      b++;
    }

    if (valC === val) {
      c++;
    }

    dp[i] = val;
  }

  return dp[n - 1];
}
