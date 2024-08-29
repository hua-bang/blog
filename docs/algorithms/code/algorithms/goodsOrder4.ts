function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  const arr = [...goods].sort();
  const n = arr.length;
  const perm: string[] = [];
  const visited: boolean[] = new Array(n).fill(false);

  const backtrack = (index: number) => {
    if (index === n) {
      res.push(perm.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] || (i > 0 && !visited[i - 1] && arr[i - 1] === arr[i])) {
        continue;
      }

      perm.push(arr[i]);
      visited[i] = true;
      backtrack(index + 1);
      perm.pop();
      visited[i] = false;
    }
  };

  backtrack(0);
  return res;
}
