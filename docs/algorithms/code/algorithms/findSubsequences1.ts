function findSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const backtrack = (index: number) => {
    // 当前置数组 >= 2 加进去
    if(arr.length >= 2) {
      res.push([...arr]);
    }

    // 如果 index >= nums.length 剪枝
    if(index >= nums.length) {
      return;
    }

    const set = new Set<number>();
    for(let i = index; i < nums.length; i++) {
      // 如果是用过了，则剪枝跳过, 因为要去除重复逻辑
      if(set.has(nums[i])) {
        continue;
      }

      // 题目要求是递增，所以遇到递减，得剪枝
      if(arr.length && arr[arr.length - 1] > nums[i]) {
        continue;
      }

      set.add(nums[i]);

      arr.push(nums[i]);
      backtrack(i + 1);
      arr.pop();
    }
  };

  backtrack(0);
  return res;  
};