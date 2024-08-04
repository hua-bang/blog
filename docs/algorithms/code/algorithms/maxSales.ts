function maxSales(sales: number[]): number {
  let dp: Array<number> = [];
  dp[0] = sales[0];
  let max = dp[0];

  for (let i = 1; i < sales.length; i++) {
    dp[i] = Math.max(dp[i - 1] + sales[i], sales[i]);
    max = Math.max(dp[i], max);
  }

  return max;
}

function maxSales(sales: number[]): number {
  let prev = sales[0];
  let max = prev;

  for (let i = 1; i < sales.length; i++) {
    prev = Math.max(prev + sales[i], sales[i]);
    max = Math.max(prev, max);
  }

  return max;
}
