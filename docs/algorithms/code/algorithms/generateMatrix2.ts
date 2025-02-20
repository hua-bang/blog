// 思路：模拟遍历过程，从外到内一圈一圈遍历，每次遍历完一圈，缩小遍历范围
// 分析：时间复杂度: O(n^2), 空间复杂度 O(n^2)
function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, top = 0, bottom = n - 1, count = 1;
  const max = n * n;

  while(count <= max) {
    for(let i = left; i <= right; i++) {
      res[top][i] = count++;
    }
    top++;

    for(let i = top; i <= bottom; i++) {
      res[i][right] = count++;
    }
    right--;

    for(let i = right; i >= left; i--) {
      res[bottom][i] = count++;
    }
    bottom--;

    for(let i = bottom; i >= top; i--) {
      res[i][left] = count++;
    }
    left++;
  }

  return res;
};