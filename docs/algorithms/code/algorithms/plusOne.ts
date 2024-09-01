function plusOne(digits: number[]): number[] {
  let addNum = 1;
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    const result = digits[i] + addNum;
    digits[i] = result % 10;
    addNum = result === 10 ? 1 : 0;
  }

  if (addNum === 1) {
    digits.unshift(1);
  }

  return digits;
}
