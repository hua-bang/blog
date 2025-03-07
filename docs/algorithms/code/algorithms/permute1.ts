function permute(nums: number[]): number[][] {
  const n = nums.length;
  const res: number[][] = [];
  const visited: boolean[] = new Array(n).fill(false);

  const dfs = (arr: number[]) => {
    if (arr.length === n) {
      res.push(arr);
      return;
    }

    for(let i = 0; i < n; i++) {
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