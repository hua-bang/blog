function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const visited: boolean[] = [];

  const dfs = (arr: number[]) => {
    if(arr.length === nums.length) {
      res.push(arr);
      return;
    }

    for(let i = 0; i < nums.length; i++) {
      if(visited[i]) {
        continue;
      }

      visited[i] = true;
      dfs([...arr, nums[i]]);
      visited[i] = false;
    }
  }
  
  dfs([]);

  return res;
};