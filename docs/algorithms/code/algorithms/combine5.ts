// 思路：通过深度优先和回溯来实现
// 复杂度分析: 时间复杂度 O(C(n,k) * k) 空间复杂度 O(k)
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const arr: number[] = [];

  const dfs = (start: number) => {
    if(arr.length >= k) {
      res.push([...arr]);
      return;
    }
    for(let i = start; i <= n; i++) {
      arr.push(i);
      dfs(i + 1);
      arr.pop();
    }
  }  

  dfs(1);
  return res;
};