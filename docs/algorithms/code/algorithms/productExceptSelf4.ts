// 思路：左右乘积列表，先从左到右遍历，再从右到左遍历，最后将左右乘积列表相乘
// 复杂度分析：时间复杂度 O(2n)，空间复杂度 O(n)
function productExceptSelf(nums: number[]): number[] {
  const res: number[] = [], n = nums.length;

  let temp = 1;
  for (let i = 0; i < n; i++) {
    res[i] = temp;
    temp = temp * nums[i];
  }

  temp = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * temp;
    temp = temp * nums[i];
  }

  return res;
};