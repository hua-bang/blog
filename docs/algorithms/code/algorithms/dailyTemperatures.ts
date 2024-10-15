function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack: number[] = [];

  for(let i = 0; i < n; i++) {
    while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      res[index] = i - index;
    }
    stack.push(i);
  } 

  return res;
};