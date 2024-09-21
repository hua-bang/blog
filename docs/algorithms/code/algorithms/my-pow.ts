function pow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  const mid = Math.floor(n / 2);
  const val = pow(x, mid);

  if (n % 2 === 0) {
    return val * val;
  }

  return val * val * x;
}

function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return pow(x, n);
}
