const calculateNum = (num1: number, num2: number, flag: string) => {
  let res = 0;
  if(flag === "+") {
    res = num1 + num2;
  }

  if(flag === "-") {
    res = num1 - num2;
  }

  if(flag === "*") {
    res = num1 * num2;
  }

  if(flag === "/") {
    res = num1 / num2;
  }

  return res > 0 ? Math.floor(res) : Math.ceil(res);
}

// 概述：逆波兰表达式求值
// 思路：使用栈，每次遇到算法符则取出栈顶两个元素进行计算，然后将结果入栈，最后返回栈顶元素
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
function evalRPN(token: string[]): number {
  const res: number[] = [];

  for(let i = 0; i < token.length; i++) {
    const curr = token[i];
    if(["+", "-", "*", "/"].includes(curr)) {
      const num2 = res.pop();
      const num1 = res.pop();
      const nextNum = calculateNum(num1!, num2!, curr);
      res.push(nextNum);
    } else {
      res.push(Number(curr));
    }
  }

  return Number(res[0]);
}