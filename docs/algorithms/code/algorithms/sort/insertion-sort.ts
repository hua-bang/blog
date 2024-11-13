// 本质上是将新元素插入到一个已经排序数组中
const insertionSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;

    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = base;
  }
};

const arr2 = [1, 4, 3, 2, 8, 7];
insertionSort(arr2);
console.log("arr2", arr2);
