function maxSales(sales: number[]): number {
  let prev = sales[0],
    max = sales[0];

  for (let i = 1; i < sales.length; i++) {
    const curr = prev >= 0 ? prev + sales[i] : sales[i];
    max = Math.max(curr, max);
    prev = curr;
  }

  return max;
}
