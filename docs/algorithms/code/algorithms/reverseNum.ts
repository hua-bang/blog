function reverse(x: number): number {
  const isPositive = x > 0;
  x = Math.abs(x);
  let count = 0;

  while (x) {
    const num = x % 10;
    count = count * 10 + num;
    x = Math.floor(x / 10);
  }

  const res = count * (isPositive ? 1 : -1);
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0;
  }

  return res;
}
