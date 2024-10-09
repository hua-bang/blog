function merge(nums: number[], left: number, mid: number, right: number) {
  const temp: number[] = [];

  let i = left,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = nums[i++];
  }

  while (j <= right) {
    temp[k++] = nums[j++];
  }

  for (let index = 0; index < temp.length; index++) {
    nums[left + index] = temp[index];
  }
}

// 本质上是做分治
// 排序好再合并
const mergeSort = (nums: number[], left: number, right: number) => {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);

  merge(nums, left, mid, right);
};

const testA = [2, 1, 3, 4, 5, 6, 8, 7];

mergeSort(testA, 0, testA.length - 1);

console.log("a", testA);
