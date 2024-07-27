function validateBookSequences(putIn: number[], takeOut: number[]): boolean {
  const stack: number[] = [];

  while (takeOut.length) {
    const book = takeOut.shift();

    if (stack.length && stack[stack.length - 1] === book) {
      stack.pop();
      continue;
    }

    while (putIn.length && putIn[0] !== book) {
      stack.push(putIn.shift()!);
    }

    if (putIn.length && putIn[0] === book) {
      putIn.shift();
    } else {
      return false;
    }
  }

  return true;
}

console.log(validateBookSequences([6, 7, 8, 9, 10, 11], [9, 11, 10, 8, 7, 6]));
