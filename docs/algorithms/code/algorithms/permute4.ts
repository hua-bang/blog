function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;
  const visited = new Array(n).fill(false);

  const dfs = (prefixArr: number[], index: number) => {
    if (index === n) {
      res.push([...prefixArr]);
      return;
    };

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      dfs([...prefixArr, nums[i]], index + 1);
      visited[i] = false;
    }
  };

  dfs([], 0);

  return res;
};