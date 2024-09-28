function plusOne(digits: number[]): number[] {
  let addNum = 1;

  const res: number[] = [];

  for(let i = digits.length - 1; i >= 0; i--) {
    const curr = digits[i] + addNum;
    res.unshift(curr % 10);
    addNum = curr === 10 ? 1 : 0;
  }

  if(addNum) {
    res.unshift(1);
  }

  return res;
};