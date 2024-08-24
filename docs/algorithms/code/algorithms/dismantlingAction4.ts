function dismantlingAction(arr: string): number {
  if (arr.length === 0) {
    return 0;
  }

  const dp: number[] = [1];
  let max = 1;
  const map: Record<string, number> = {};
  map[arr[0]] = 0;

  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      index = Math.max(index, map[arr[i]] + 1);
      dp[i] = i - index + 1;
    } else {
      dp[i] = dp[i - 1] + 1;
    }

    map[arr[i]] = i;

    max = max > dp[i] ? max : dp[i];
  }

  return max;
}
