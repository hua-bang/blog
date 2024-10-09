const insertionSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    // 当前的值
    let base = nums[i];

    // 前序索引
    let j = i - 1;

    // 如果前序的比他小，则需要做替换
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = base;
  }
};

const arr2: number[] = [1, 4, 3, 2, 8, 7];
insertionSort(arr2);
console.log("arr2", arr2);
