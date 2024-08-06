function sockCollocation(sockets: number[]): number[] {
  const map: Record<number, number> = {};
  for (let i = 0; i < sockets.length; i++) {
    if (!map[sockets[i]]) {
      map[sockets[i]] = 1;
    } else {
      map[sockets[i]] = map[sockets[i]] + 1;
    }
  }

  const res = [];
  for (let i = 0; i < sockets.length; i++) {
    if (map[sockets[i]] === 1) {
      res.push(sockets[i]);
    }
  }

  return res;
}

function sockCollocation(sockets: number[]): number[] {
  let res = sockets.reduce((acc, curr) => (acc ^= curr));

  let div = 1;
  while ((res & div) === 0) {
    div = div << 1;
  }

  let a = 0,
    b = 0;

  for (let i = 0; i < sockets.length; i++) {
    const num = sockets[i];
    if (num & div) {
      a = a ^ num;
    } else {
      b = b ^ num;
    }
  }

  return [a, b];
}
