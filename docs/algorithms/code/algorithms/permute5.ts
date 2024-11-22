function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;
  const visited: boolean[] = new Array(n).fill(false);

  const dfs = (arr: number[], index: number) => {
    if (index === n) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }
      visited[i] = true;
      dfs([...arr, nums[i]], index + 1);
      visited[i] = false;
    }
  }

  dfs([], 0);

  return res;
};