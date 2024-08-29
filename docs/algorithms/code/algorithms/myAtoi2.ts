function myAtoi(str: string): number {
  str = str.trim();
  const reg = /^[+-]?\d+/;
  const match = str.match(reg);

  if (!match) {
    return 0;
  }

  const num = Number(match[0]);

  const min = 2 ** 31 * -1,
    max = 2 ** 31 - 1;

  if (num >= max) {
    return max;
  }

  if (num <= min) {
    return min;
  }

  return num;
}
