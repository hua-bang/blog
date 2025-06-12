// 思路：摩尔投票法，遍历数组，如果当前元素与 num 相等，则 count 自增，否则 count 自减，如果 count 为 1，则将 num 赋值为当前元素，否则 count 自减
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
function majorityElement(nums: number[]): number {
  let count = 1, num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
      continue;
    }
    if (count === 1) {
      num = nums[i];
    } else {
      count--;
    }
  }

  return num;
};