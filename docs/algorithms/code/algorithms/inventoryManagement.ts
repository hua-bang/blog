function inventoryManagement(stock: number[], cnt: number): number[] {
  return stock.sort((a, b) => a - b).slice(0, cnt);
}
