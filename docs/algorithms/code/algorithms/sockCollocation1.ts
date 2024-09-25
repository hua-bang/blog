function sockCollocation(sockets: number[]): number[] {
  // 最终这个就是两个不同的数的 ^
  let res = sockets.reduce((a, b) => a ^ b);

  // 获取第一位不同的数
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
