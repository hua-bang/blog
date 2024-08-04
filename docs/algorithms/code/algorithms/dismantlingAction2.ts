function dismantlingAction(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  const dp = [];
  const map = new Map();
  let max = (dp[0] = 1);
  map.set(s[0], 0);

  for (let i = 0, j = 1; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
      dp[j] = j - i + 1;
    } else {
      dp[j] = dp[j - 1] + 1;
    }
    map.set(s[j], j);
    max = max < dp[j] ? dp[j] : max;
  }

  return max;
}
