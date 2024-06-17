function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;

    if (digits[i] !== 0) {
      return digits;
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
}
