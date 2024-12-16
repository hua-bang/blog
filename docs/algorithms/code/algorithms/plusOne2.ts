function plusOne(digits: number[]): number[] {
  let needAddOne = true;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (!needAddOne) {
      break;
    }
    const sum = digits[i] + (needAddOne ? 1 : 0);
    needAddOne = sum >= 10;
    digits[i] = sum % 10;
  }

  if (needAddOne) {
    digits.unshift(1);
  }

  return digits;
};