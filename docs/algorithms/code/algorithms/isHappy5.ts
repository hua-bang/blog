// 使用Set检测循环，不断计算各位数字平方和，直到得到1（快乐数）或发现重复数字（非快乐数）。
// 复杂度分析：时间复杂度 O(logn)，空间复杂度 O(logn)
function computed(n: number) {
  return [...(n + '')].reduce((acc, curr) => acc + Number(curr) * Number(curr), 0);
}

function isHappy(n: number): boolean {
  const set = new Set<number>();

  let curr = n;

  while(true) {
    if(curr === 1) {
      return true;
    }

    if(set.has(curr)) {
      return false;
    }

    set.add(curr);
    curr = computed(curr);
  }

  return true;
};