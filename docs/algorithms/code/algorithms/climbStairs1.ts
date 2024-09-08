function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  let prev1 = 1,
    prev2 = 2;

  for (let i = 2; i < n; i++) {
    const temp = prev2;
    prev2 = prev1 + prev2;
    prev1 = temp;
  }

  return prev2;
}
