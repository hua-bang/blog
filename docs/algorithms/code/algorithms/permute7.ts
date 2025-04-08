// 思路：本质上是做回溯。通过 used 数组标记是否使用过，使用过的就跳过
// 复杂度分析：时间复杂度 O(n!)，空间复杂度 O(n * n!)
function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false); // false 表示未使用，true 表示已使用

  const backtrack = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      path.push(nums[i]);
      used[i] = true;
      backtrack();
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return res;
};