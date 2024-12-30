const calcuteVal = (num1: number, num2: number, flag: string) => {
  let res = 0;
  if (flag === "+") {
    res = num1 + num2;
  }

  if (flag === "-") {
    res = num1 - num2;
  }

  if (flag === "*") {
    res = num1 * num2;
  }

  if (flag === "/") {
    res = num1 / num2;
  }

  return res > 0 ? Math.floor(res) : Math.ceil(res);
}

function evalRPN(tokens: string[]): number {
  const stack: Array<string | number> = [];
  for (let token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const val1 = stack.pop();
      const val2 = stack.pop();
      const nextVal = calcuteVal(Number(val2), Number(val1), token as any);
      stack.push(nextVal);
    } else {
      stack.push(token);
    }
  }

  return Number(stack[0]);
};