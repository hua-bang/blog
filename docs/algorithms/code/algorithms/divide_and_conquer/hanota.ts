const move = (src: number[], tar: number[]) => {
  const pan = src.pop();
  tar.push(pan as number);
}


const dfs = (i: number, src: number[], buf: number[], tar: number[]): void => {
  if(i === 1) {
    move(src, tar);
    return;
  }

  dfs(i - 1, src, tar, buf);

  move(src, tar);

  dfs(i-1, buf, src, tar);
}

const hanoita = (A: number[], B: number[], C: number[]) => {
  const n = A.length;
  dfs(n, A, B, C);
}

const A = [9,8,7,6,5,4];
const B: number[] = [];
const C: number[] = [];

hanoita(A,B,C);

console.log(A, B, C);