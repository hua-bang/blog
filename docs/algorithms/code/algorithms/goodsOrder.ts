function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  const perm: string[] = [];
  const arr: string[] = Array.from(goods).sort();
  const visited: boolean[] = new Array(arr.length).fill(false);

  function backtrack(arr: string[], i: number, n: number, perm: string[]) {
    if (i === n) {
      res.push(perm.join(""));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (visited[j] || (j > 0 && !visited[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }

      visited[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      visited[j] = false;
    }
  }

  backtrack(arr, 0, goods.length, perm);

  return res;
}

function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  const perm: string[] = [];
  const arr: string[] = [...goods].sort();
  const visited: boolean[] = new Array(arr.length).fill(false);

  function backtrack(arr: string[], i: number, n: number, perm: string[]) {
    if (i === n) {
      res.push(perm.join(""));
      return;
    }

    for (let j = 0; j < n; j++) {
      if (visited[j] || (j > 0 && !visited[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }

      visited[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      visited[j] = false;
    }
  }

  backtrack(arr, 0, goods.length, perm);
  return res;
}

function goodsOrder(goods: string): string[] {
  const res: string[] = [];
  const arr = [...goods].sort();
  const n = arr.length;
  const visited = new Array(n).fill(false);
  const perm: string[] = [];

  const backtrack = (index: number) => {
    if (index === n) {
      res.push(perm.join(""));
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i] || (i > 0 && !visited[i - 1] && arr[i] === arr[i - 1])) {
        continue;
      }

      visited[i] = true;
      perm.push(arr[i]);
      backtrack(index + 1);
      visited[i] = false;
      perm.pop();
    }
  };

  backtrack(0);
  return res;
}
