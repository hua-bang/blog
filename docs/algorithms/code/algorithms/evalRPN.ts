function isNumberStr(token: string) {
  return !("+" === token || "-" === token || "*" === token || "/" === token);
}

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if (isNumberStr(token)) {
      stack.push(Number(token));
      continue;
    }

    const num2 = stack.pop()!;
    const num1 = stack.pop()!;

    if (token === "+") {
      stack.push(num1 + num2);
      continue;
    }

    if (token === "-") {
      stack.push(num1 - num2);
      continue;
    }

    if (token === "*") {
      stack.push(num1 * num2);
      continue;
    }

    if (token === "/") {
      stack.push(
        num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2)
      );
      continue;
    }
  }

  return stack.pop()!;
}

console.log(evalRPN(["4", "13", "5", "/", "+"]));
