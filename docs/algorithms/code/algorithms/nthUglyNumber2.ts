function nthUglyNumber(n: number): number {
  const dp: number[] = [1];
  let a = 0,
    b = 0,
    c = 0;

  for (let i = 1; i < n; i++) {
    let va = dp[a] * 2;
    let vb = dp[b] * 3;
    let vc = dp[c] * 5;

    const val = Math.min(va, vb, vc);

    if (val === va) {
      a++;
    }

    if (val === vb) {
      b++;
    }

    if (val === vc) {
      c++;
    }

    dp[i] = val;
  }

  return dp[n - 1];
}
