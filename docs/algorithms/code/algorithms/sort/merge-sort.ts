/* 合并左子数组和右子数组 */
function merge(nums: number[], left: number, mid: number, right: number): void {
  const tmp = new Array(right - left + 1);
  let i = left,
    j = mid + 1,
    k = 0;

  while (i <= mid && j <= right) {
    if (nums[i] <= nums[j]) {
      tmp[k++] = nums[i++];
    } else {
      tmp[k++] = nums[j++];
    }
  }

  while (i <= mid) {
    tmp[k++] = nums[i++];
  }

  while (j <= right) {
    tmp[k++] = nums[j++];
  }

  for (let k = 0; k < tmp.length; k++) {
    nums[left + k] = tmp[k];
  }
}

const mergeSort = (nums: number[], left: number, right: number): void => {
  if (left >= right) {
    return;
  }

  const mid = (left + right) >> 1;

  mergeSort(nums, left, mid); // 递归左子数组
  mergeSort(nums, mid + 1, right); // 递归右子数组
  // 合并阶段
  merge(nums, left, mid, right);
};

const a = [2, 1, 3, 4, 5, 6, 8, 7];

mergeSort(a, 0, a.length - 1);

console.log("a", a);
