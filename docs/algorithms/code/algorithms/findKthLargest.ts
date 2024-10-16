const partition = (nums: number[], left: number, right: number) => {
  const base = nums[right];
  let i = left - 1;
  for(let k = left; k < right; k++) {
    if(nums[k] < base) {
      i++;
      swap(nums, k,  i);
    }
  }

  swap(nums, i + 1, right);
  return i + 1;
}

const swap = (nums: number[], left: number, right: number) => {
  [nums[left], nums[right]] = [nums[right], nums[left]];
}

const quickSort = (nums: number[], left: number, right: number) => {
  if (left >= right) {
    return;
  }

  const mid = partition(nums, left, right);
  quickSort(nums, left, mid - 1);
  quickSort(nums, mid + 1, right);
}

function findKthLargest(nums: number[], k: number): number {
  quickSort(nums, 0, nums.length - 1);
  return nums.sort((a, b) => a - b)[nums.length - k];
};