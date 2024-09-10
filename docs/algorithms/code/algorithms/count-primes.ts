const countPrimes = (n: number) => {
  let notPrimes = new Array(n).fill(false);

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (notPrimes[i]) {
      continue;
    }
    count++;
    for (let j = i; j < n; j = j + i) {
      notPrimes[j] = true;
    }
  }

  return count;
};
