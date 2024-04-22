const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let base = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > base) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = base;
  }
};

const arr = [4, 1, 3, 1, 5, 2];
insertionSort(arr);
console.log(arr);
