/**
 Do not return anything, modify nums1 in-place instead.
 */
// 思路：双指针，从后往前遍历，那个大先写入那个
// 复杂度分析：时间复杂度是 O(m + n), 空间复杂度 O(1)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index1 = m - 1, index2 = n - 1, index = m + n - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] >= nums2[index2]) {
      nums1[index] = nums1[index1];
      index--;
      index1--;
    } else {
      nums1[index] = nums2[index2];
      index--;
      index2--;
    }
  }

  while (index2 >= 0) {
    nums1[index--] = nums2[index2--];
  }
};