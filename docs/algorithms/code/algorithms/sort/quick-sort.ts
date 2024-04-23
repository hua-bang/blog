function partition(nums: number[], left: number, right: number): number {
  let i = left,
    j = right;
  while (i < j) {
    while (i < j && nums[j] >= nums[left]) {
      j = j - 1;
    }
    while (i < j && nums[i] <= nums[left]) {
      i = i + 1;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  [nums[i], nums[left]] = [nums[left], nums[i]];
  return i;
}

function quickSort(nums: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
}

const a = [4, 1, 3, 6, 5, 2];
quickSort(a, 0, a.length - 1);

console.log(a);
