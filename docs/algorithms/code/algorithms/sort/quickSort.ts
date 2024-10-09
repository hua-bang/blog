// 本质上是选基准值
// 左边排完序，右边排完序
const quickSort2 = (arr: number[], left: number, right: number) => {
  if (left >= right) {
    return;
  }

  const index = partition2(arr, left, right);
  quickSort2(arr, left, index - 1);
  quickSort2(arr, index + 1, right);
};

const partition2 = (arr: number[], left: number, right: number) => {
  let base = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < base) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
};

function swap<T>(arr: T[], left: number, right: number) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

const testA1 = [4, 1, 3, 6, 5, 2];
quickSort2(testA1, 0, testA1.length - 1);

console.log(testA1);
