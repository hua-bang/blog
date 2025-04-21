function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  let prev = 0, curr = 1;
  for (let i = 2; i <= n; i++) {
    const temp = curr;
    curr = (prev + curr) % 1000000007;
    prev = temp;
  }

  return curr;
};