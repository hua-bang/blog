function inventoryManagement(stock: number[]): number {
  return stock.reduce((acc, curr) => acc > curr ? curr : acc)
};