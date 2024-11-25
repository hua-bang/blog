function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  // 存放 index
  const stack: number[] = [];
  const res: number[] = new Array(n).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }

  return res;
};