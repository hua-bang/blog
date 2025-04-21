function trainWays(num: number): number {
  if (num <= 2) {
    return num;
  }

  let prev = 1, curr = 2;

  for (let i = 3; i <= num; i++) {
    const temp = curr;
    curr = (curr + prev) % 1000000007;
    prev = temp;
  }

  return curr;
};