function maxSales(sales: number[]): number {
  const n = sales.length;
  if (n === 0) {
    return 0;
  }

  let prev = sales[0], max = prev;

  for (let i = 1; i < n; i++) {
    prev = (prev > 0 ? prev : 0) + sales[i];
    max = prev > max ? prev : max;
  }

  return max;
};