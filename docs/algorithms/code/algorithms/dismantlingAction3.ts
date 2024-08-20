function dismantlingAction(arr: string): number {
  if (arr.length === 0) {
    return 0;
  }

  const dp: number[] = [];
  const map = new Map<string, number>();
  map.set(arr[0], 0);
  let max = (dp[0] = 1);

  for (let i = 0, j = 1; j < arr.length; j++) {
    if (map.has(arr[j])) {
      i = Math.max(i, map.get(arr[j]) + 1);
      dp[j] = j - i + 1;
    } else {
      dp[j] = dp[j - 1] + 1;
    }

    map.set(arr[j], j);
    max = max > dp[j] ? max : dp[j];
  }

  return max;
}
