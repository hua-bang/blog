// 描述：给定一个正整数 n，生成一个包含 1 到 n ^ 2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
// 思路：采用四个指针，分别指向矩阵的左、右、上、下边界
// 1. 从左到右遍历上边界，将元素填入矩阵中
// 2. 从上到下遍历右边界，将元素填入矩阵中
// 3. 从右到左遍历下边界，将元素填入矩阵中
// 4. 从下到上遍历左边界，将元素填入矩阵中
// 5. 重复步骤 1-4，直到遍历完所有元素

function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));

  let left = 0, right = n - 1, top = 0, bottom = n - 1; // 定义四个指针，分别指向矩阵的左、右、上、下边界
  let count = 1;
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