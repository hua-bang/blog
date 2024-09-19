function wardrobeFinishing(m: number, n: number, cnt: number): number {
  let res = 0;
  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) {
      return;
    }

    visited[i][j] = true;
    const sum = (i % 10) + (j % 10) + Math.floor(i / 10) + Math.floor(j / 10);

    if (sum > cnt) {
      return;
    }

    res++;
    dfs(i, j + 1);
    dfs(i + 1, j);
  };

  dfs(0, 0);
  return res;
}
