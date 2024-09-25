function dismantlingAction(arr: string): number {
  if (!arr.length) {
    return 0;
  }

  const map: Record<string, number> = {};
  map[arr[0]] = 0;
  let max = 1,
    index = 0;
  const dp = [1];

  for (let i = 1; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      index = Math.max(index, map[arr[i]] + 1);
      dp[i] = i - index + 1;
    } else {
      dp[i] = dp[i - 1] + 1;
    }

    map[arr[i]] = i;

    max = Math.max(dp[i], max);
  }

  return max;
}
