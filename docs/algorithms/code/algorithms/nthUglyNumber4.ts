function nthUglyNumber(n: number): number {
  const dp = [1];

  let a = 0,
    b = 0,
    c = 0;

  for (let i = 1; i < n; i++) {
    const aVal = dp[a] * 2;
    const bVal = dp[b] * 3;
    const cVal = dp[c] * 5;

    const val = Math.min(aVal, bVal, cVal);

    if (val === aVal) {
      a++;
    }

    if (val === bVal) {
      b++;
    }

    if (val === cVal) {
      c++;
    }

    dp[i] = val;
  }

  return dp[n - 1];
}
