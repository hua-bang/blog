// 思路：本质上是使用双指针进行比较
// 每次逼近的时候，把大的值塞到 数组中就好
function sortedSquares(nums: number[]): number[] {
  let left = 0, right = nums.length - 1;
  const res: number[] = [];
  let index = nums.length - 1;
  while (left < right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];

    if (leftVal > rightVal) {
      res[index--] = leftVal;
      left++;
    } else {
      res[index--] = rightVal;
      right--;
    }
  }

  res[0] = nums[left] * nums[left];
  return res;
};