function inventoryManagement(stock: number[]): number {
  let count = 1;
  let num = stock[0];

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] === num) {
      count++;
      continue;
    }
    if (count === 1) {
      num = stock[i];
    } else {
      count--;
    }
  }

  return num;
}
