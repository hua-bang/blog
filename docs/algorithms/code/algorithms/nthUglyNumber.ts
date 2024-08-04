function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let a = 0,
    b = 0,
    c = 0;

  for (let i = 1; i < n; i++) {
    const va = dp[a] * 2;
    const vb = dp[b] * 3;
    const vc = dp[c] * 5;

    const val = Math.min(va, vb, vc);

    if (val === va) {
      a++;
    }
    if (val === vb) {
      b++;
    }
    if (val === vb) {
      c++;
    }

    dp[i] = val;
  }

  return dp[n - 1];
}
