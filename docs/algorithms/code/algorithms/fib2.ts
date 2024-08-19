function fib(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    const temp = (curr + prev) % 1000000007;
    prev = curr;
    curr = temp;
  }

  return curr;
}
