function myPowHelper(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  const half = myPowHelper(x, Math.floor(n / 2));

  if (n % 2 === 1) {
    return half * half * x;
  }

  return half * half;
}

function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1;
  }

  if (x === 0) {
    return 0;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return myPowHelper(x, n);
};