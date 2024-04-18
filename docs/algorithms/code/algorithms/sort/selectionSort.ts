const selectionSort = (arr: number[]) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let k = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[k]) {
        k = j; // 记录最小元素的索引
      }
    }

    [arr[k], arr[i]] = [arr[i], arr[k]];
  }
};
