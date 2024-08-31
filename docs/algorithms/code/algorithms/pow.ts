function pow(x: number, n: number) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  const half = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}

function myPow(x: number, n: number): number {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return pow(x, n);
}
