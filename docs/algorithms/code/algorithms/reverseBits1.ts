function reverseBits(n: number): number {
  // 本质上，我们对 32 位遍历就好
  let res = 0;

  for (let i = 0; i < 32; i++) {
    res = res << 1;
    res |= (n & 1);
    n = n >> 1;
  }

  return res >>> 0;
};