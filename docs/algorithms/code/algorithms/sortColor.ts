/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
  const arr: number[] = new Array(3).fill(0);
  for(let num of nums) {
    arr[num] = arr[num] + 1;
  }

  const res: number[] = [];
  let index = 0;
  arr.map((item, arrIndex) => {
    const num = item;
    for(let i = 0; i < item; i++) {
      nums[index++] = arrIndex; 
    }
  });
};

/**
 Do not return anything, modify nums in-place instead.
 */

 function quickSort(arr: number[], left: number, right: number) {
  if(left >= right) {
    return;
  }

  const index = partition(arr, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);
}

function partition(arr: number[], left: number, right: number) {
  const base = arr[right];
  let i = left - 1;
  for(let index = left; index < right; index++) {
    if(arr[index] <= base) {
      i++;
      swap(arr, i, index);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function swap(arr: number[], left: number, right: number) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}

function sortColors(nums: number[]): void {
  quickSort(nums, 0, nums.length - 1);
};