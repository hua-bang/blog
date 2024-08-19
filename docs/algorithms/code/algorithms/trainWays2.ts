function trainWays(num: number): number {
  if (num === 0) {
    return 1;
  }
  if (num === 1 || num === 2) {
    return num;
  }

  let prev = 1,
    curr = 2;
  for (let i = 3; i <= num; i++) {
    const temp = (prev + curr) % 1000000007;
    prev = curr;
    curr = temp;
  }

  return curr;
}
