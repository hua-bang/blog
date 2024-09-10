function isPowerOfThree(n: number): boolean {
  if (n === 1) {
    return true;
  }
  if (n < 3) {
    return false;
  }

  let res = n;
  while (res >= 3) {
    res = res / 3;
  }

  return res === 1;
}

function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  return 1162261467 % n === 0;
}
