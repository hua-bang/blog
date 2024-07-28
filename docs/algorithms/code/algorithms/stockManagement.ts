function stockManagement(stock: number[]): number {
  let min = stock[0];

  for (let i = 1; i < stock.length; i++) {
    min = Math.min(min, stock[i]);
  }

  return min;
}
