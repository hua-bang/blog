function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const value = map[s[i]];
    if (i < n - 1 && value < map[s[i + 1]]) {
      ans -= value;
    } else {
      ans += value;
    }
  }

  return ans;
}
