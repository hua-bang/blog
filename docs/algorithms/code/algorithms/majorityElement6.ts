// 方法：摩尔投票法，假设数组中存在一个众数，那么这个众数出现的次数一定大于其他所有数出现的次数之和
// 因此，我们可以使用一个计数器来记录当前众数出现的次数，如果当前数与众数相同，则计数器加1，否则计数器减1
// 如果计数器为0，则将当前数作为众数，并重置计数器为1
// 最后，众数就是计数器为1的数

// 本质上在统计众数

// 复杂度分析：
// 时间复杂度：O(n)
// 空间复杂度：O(1)
function majorityElement(nums: number[]): number {
  let count = 1, num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === num) {
      count++;
    } else {
      if (count === 1) {
        num = nums[i];
      } else {
        count--;
      }
    }
  }

  return num;
};