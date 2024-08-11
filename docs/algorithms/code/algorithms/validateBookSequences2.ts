function validateBookSequences(putIn: number[], takeOut: number[]): boolean {
  const stack: number[] = [];

  while (takeOut.length) {
    const book = takeOut.shift();

    // 看看 stack 中有没有
    if (stack.length && stack[stack.length - 1] === book) {
      stack.pop();
      continue;
    }

    // 根据 putIn 数组
    // 如果不相等，说明其他图书还没取出
    while (putIn.length && putIn[0] !== book) {
      stack.push(putIn.shift()!);
    }

    // 如果为空，则为不匹配，不为空，则拿的就是当前的书
    if (putIn.length && putIn[0] === book) {
      putIn.shift();
    } else {
      return false;
    }
  }

  return true;
}
