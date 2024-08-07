// [2,4,6,8,10]
function statisticalResult(arrayA: number[]): number[] {
  if (arrayA.length === 0) {
    return [];
  }

  const arr: number[] = [];
  arr[0] = 1;

  // 先构建从左到右的乘
  // [1, 2, 8, 48, 384]
  for (let i = 1; i < arrayA.length; i++) {
    arr[i] = arr[i - 1] * arrayA[i - 1];
  }

  let temp = 1;
  // 再构建从右往左乘回来
  // [1920 , 960 , 640 , 480, 384]
  for (let i = arrayA.length; i >= 0; i--) {
    arr[i] = temp * arr[i];
    temp = temp * arrayA[i];
  }

  return arr;
}
