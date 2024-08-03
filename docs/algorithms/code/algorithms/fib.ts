function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  const MOD = 1000000007;
  let prev1 = 0,
    prev2 = 1;

  for (let i = 2; i <= n; i++) {
    let curr = (prev1 + prev2) % MOD;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}
