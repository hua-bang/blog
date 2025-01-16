// 思路：由于是全排序，这里我们还是用回溯来做
// 每次回溯，选择一个数，塞到数组 arr 中。
// 说明，每一次我们做选择的时候，只能选择【未选择过的数】
// 当数组长度到 n 的时候，则可以推入 res 中
function permute(nums: number[]): number[][] {
  // 存放最后结构
  const res: number[][] = [];
  // 存放单个数组
  const arr: number[] = [];
  // 存放访问节点记录
  const visited: boolean[] = [];
  const n = nums.length;

  const backtrack = () => {
    // 当数组长度到 n 的时候，推入 res 中。
    if(arr.length === n) {
      res.push([...arr]);
      return;
    }

    // 每次选择一个
    for(let i = 0; i < n; i++) {
      // 如果已经访问过了，则打上标识
      if(visited[i]) {
        continue;
      }
      // 推入一个数进去
      arr.push(nums[i]);
      // 做标识
      visited[i] = true;
      backtrack();
      arr.pop();
      visited[i] = false;
    }
  }

  backtrack();
  return res;
};