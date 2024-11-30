function hammingWeight(n: number): number {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) === 1) {
      count++;
    }
    n = n >> 1;
  }

  return count;
};