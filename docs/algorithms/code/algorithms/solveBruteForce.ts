function solveBruteForce(array: number[], queries: [number, number][]): number[] {
  const n = array.length;
  const results: number[] = [];

  const prefix: number[] = [];
  prefix[0] = array[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + array[i];
  }

  for (let [a, b] of queries) {
    if (a === 0) {
      results.push(prefix[b]);
    } else {
      results.push(prefix[b] = prefix[a - 1]);
    }
  }

  return results;
}

// 测试用例
const array = [1, 2, 3, 4, 5];
const queries: [number, number][] = [
  [0, 1],
  [1, 3]
];

console.log(solveBruteForce(array, queries)); // 输出: [3, 9]
