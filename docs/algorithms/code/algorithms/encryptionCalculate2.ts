function encryptionCalculate(dataA: number, dataB: number): number {
  while (dataB) {
    let c = (dataA & dataB) << 1;
    dataA ^= dataB;
    dataB = c;
  }

  return dataA;
}

function encryptionCalculate(dataA: number, dataB: number): number {
  if (dataB === 0) {
    return dataA;
  }

  return encryptionCalculate(dataA ^ dataB, (dataA & dataB) << 1);
}
