function statisticalResult(arrayA: number[]): number[] {
  const n = arrayA.length;

  const res: number[] = [];

  let temp = 1;
  for (let i = 0; i < n; i++) {
    res[i] = temp;
    temp = temp * arrayA[i];
  }

  temp = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] = temp * res[i];
    temp = temp * arrayA[i];
  }

  return res;
}
