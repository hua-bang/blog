function inventoryManagement(stock: number[]): number {
  let res = stock[0];
  let count = 1;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] === res) {
      count++;
      continue;
    }

    if (count === 1) {
      res = stock[i];
    } else {
      count--;
    }
  }

  return res;
}

function inventoryManagement(stock: number[]): number {
  let res = stock[0];

  let count = 1;

  for (let i = 1; i < stock.length; i++) {
    if (stock[i] === res) {
      count++;
      continue;
    }

    if (count === 1) {
      res = stock[i];
    } else {
      count--;
    }
  }

  return res;
}
