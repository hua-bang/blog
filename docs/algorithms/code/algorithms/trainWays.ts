function trainWays(num: number): number {
  if (num === 0) {
    return 1;
  }
  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 2;

  for (let i = 2; i < num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[num - 1];
}

function trainWays(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  }
  let prev1 = 1,
    prev2 = 2;

  for (let i = 2; i < num; i++) {
    let curr = (prev2 + prev1) % 1000000007;
    prev1 = prev2;
    prev2 = curr;
  }

  return prev2;
}
