function removeDuplicates(nums: number[]): number {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[count - 1] === nums[i]) {
      continue;
    }
    nums[count++] = nums[i];
  }

  return count;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
