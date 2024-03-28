// link: https://leetcode.cn/problems/remove-element/

// 时间 O(N) 空间O(1)

function removeElement(nums: number[], val: number): number {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
}
