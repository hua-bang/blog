function sockCollocation(sockets: number[]): number[] {
  let res = sockets.reduce((acc, prev) => acc ^ prev);

  let div = 1;
  while ((res & div) === 0) {
    div = div << 1;
  }

  let a = 0,
    b = 0;
  for (let i = 0; i < sockets.length; i++) {
    const num = sockets[i];
    if (num & div) {
      a ^= num;
    } else {
      b ^= num;
    }
  }

  return [a, b];
}
