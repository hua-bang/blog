function fastPow(x: number, n: number): number {
  if (n === 0 || x === 1) {
    return 1;
  }

  const half = fastPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}

function myPow(x: number, n: number): number {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  return fastPow(x, n);
}
