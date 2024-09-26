function cuttingBamboo(bamboo_len: number): number {
  if (bamboo_len <= 3) {
    return bamboo_len - 1;
  }

  let res = 1;
  while (bamboo_len > 4) {
    bamboo_len -= 3;
    res = (res * 3) % 1000000007;
  }

  return (res * bamboo_len) % 1000000007;
}
