function sockCollocation(sockets: number[]): number[] {
  // 先算出总体的异或结果， 本质上是两个不同数的异或结果
  const res = sockets.reduce((acc, curr) => acc ^ curr);

  // 计算出不同 0 的位置, 计 div
  let div = 1;
  while ((res & div) === 0) {
    div = div << 1;
  }

  // 本质上，对于两个不同的数，对 div 做并一定是不同的结果
  // 同时，由于除了这两个数，其他的数都相同
  // 所以我们可以把一类的数进行异或，最终得到的就是 a,b 结果
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
