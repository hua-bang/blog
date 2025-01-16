function permuteUnique(nums: number[]): number[][] {
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

    const used = new Set<number>();

    // 每次选择一个
    for(let i = 0; i < n; i++) {
      // 如果已经访问过了，或者此前已经做过类似选择，则没有必要再选择
      if(visited[i] || used.has(nums[i])) {
        continue;
      }

      used.add(nums[i]);
      // 推入一个数进去
      arr.push(nums[i]);
      // 做标识
      visited[i] = true;
      backtrack();
      visited[i] = false;
      arr.pop();
    }
  }

  backtrack();

  return res;
};