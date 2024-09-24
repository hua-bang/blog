function dismantlingAction(arr: string): number {
  // 本质上是计算最长连续的字符
  // 我们可以设置一个 dp，dp[i] 表示 i 最长的字符
  // 同时，中间我们存放 max，max 和 dp[i] 进行比较。

  if (!arr.length) {
    return 0;
  }

  const dp = [1];
  let max = 1;
  let index = 0;
  const map: Record<string, number> = {};
  map[arr[0]] = 0;

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
