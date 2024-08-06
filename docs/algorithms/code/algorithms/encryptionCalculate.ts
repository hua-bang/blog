function encryptionCalculate(dataA: number, dataB: number): number {
  while (dataB) {
    let c = (dataA & dataB) << 1;
    dataA ^= dataB;
    dataB = c;
  }

  return dataA;
}
