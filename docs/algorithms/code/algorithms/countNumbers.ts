function countNumbers(cnt: number): number[] {
  const max = Math.pow(10, cnt);
  const res: number[] = [];

  for (let i = 1; i < max; i++) {
    res.push(i);
  }

  return res;
}
