// 描述：需要将数组中等于val的元素删除，并返回剩余元素的个数
// 思路：使用一个指针，遍历数组，如果当前元素不等于val，则将其复制到指针位置，并将指针向前移动一位
function removeElement(nums: number[], target: number) {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== target) {
      nums[count++] = nums[i];
    }
  }

  return count;
}