function cuttingBamboo(bamboo_len: number): number {
  if (bamboo_len <= 3) {
    return bamboo_len - 1;
  }

  let res = 1;
  while (bamboo_len > 4) {
    res *= 3;
    res %= 1e9 + 7;
    bamboo_len = bamboo_len - 3;
  }

  return (res * bamboo_len) % (1e9 + 7);
}
