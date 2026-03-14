// 时间 O(n) 空间 O(1)
function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[count++] = nums[i];
    }
  }

  return count;
}