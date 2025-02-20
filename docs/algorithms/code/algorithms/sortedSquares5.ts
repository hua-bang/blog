// 思路：双指针, 从两边向中间遍历， 将平方值大的先放入结果数组中，移动指针
// 分析：时间复杂度: O(n), 空间复杂度 O(n)
function sortedSquares(nums: number[]): number[] {
  const res: number[] = [];
  
  let left = 0, right = nums.length - 1;

  while(left <= right) {
    const leftVal = nums[left] * nums[left];
    const rightVal = nums[right] * nums[right];
    if(leftVal >= rightVal) {
      res.unshift(leftVal);
      left++;
    } else {
      res.unshift(rightVal);
      right--;
    }
  }

  return res;
};