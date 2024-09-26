function statisticalResult(arrayA: number[]): number[] {
  if (arrayA.length === 0) {
    return [];
  }

  const res = [1];

  for (let i = 1; i < arrayA.length; i++) {
    res[i] = res[i - 1] * arrayA[i - 1];
  }

  let temp = 1;
  for (let i = arrayA.length - 1; i >= 0; i--) {
    res[i] = res[i] * temp;
    temp = temp * arrayA[i];
  }

  return res;
}
