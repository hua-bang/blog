function merge(
  number: number[],
  left: number,
  mid: number,
  right: number
): void {
  if (left >= right) {
    return;
  }

  let i = left,
    j = mid + 1;

  const temp: number[] = [];
  let index = 0;

  while (i <= mid && j <= right) {
    if (number[i] <= number[j]) {
      temp[index++] = number[i++];
    } else {
      temp[index++] = number[j++];
    }
  }

  while (i <= mid) {
    temp[index++] = number[i++];
  }

  while (j <= right) {
    temp[index++] = number[j++];
  }

  for (let k = 0; k < temp.length; k++) {
    number[left + k] = temp[k];
  }
}

function mergeSort(nums: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  let mid = (left + right) >> 1;

  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);

  merge(nums, left, mid, right);
}

const nums = [1, 5, 7, 3, 2, 8, 6];

mergeSort(nums, 0, 6);

console.log(nums);
