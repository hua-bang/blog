function myAtoi(str: string): number {
  str = str.trim();
  const reg = /^[+-]?\d+/;

  const match = reg.exec(str);

  if (!match) {
    return 0;
  }

  const num = Number(match[0]);

  if (num < Math.pow(-2, 31)) {
    return Math.pow(-2, 31);
  }

  if (num > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }

  return num;
}
