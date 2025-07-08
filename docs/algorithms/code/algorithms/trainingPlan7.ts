// 思路：双指针，一左一右
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)
function trainingPlan(actions: number[]): number[] {
  const res: number[] = [];

  const n = actions.length;

  let leftIndex = 0, rightIndex = n - 1;

  for (let i = 0; i < n; i++) {
    const val = actions[i];
    if (val % 2 === 1) {
      res[leftIndex++] = val;
    } else {
      res[rightIndex--] = val;
    }
  }

  return res;
};