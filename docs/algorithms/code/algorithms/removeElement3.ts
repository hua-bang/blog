// 思路：当 currVal 不等于 val 的时候，写入数组中
function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    if (currVal !== val) {
      nums[count++] = currVal;
    }
  }

  return count;
};