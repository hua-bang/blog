// 方法：从后往前遍历，比较两个数组的大小，将较大的数组插入到nums1的末尾
// 复杂度分析：
// 时间复杂度：O(m + n)
// 空间复杂度：O(1)

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n - 1, i1 = m - 1, i2 = n - 1;

  while (i1 >= 0 && i2 >= 0) {
    if (nums1[i1] <= nums2[i2]) {
      nums1[index--] = nums2[i2--];
    } else {
      nums1[index--] = nums1[i1--];
    }
  }

  while (i2 >= 0) {
    nums1[index--] = nums2[i2--];
  }
};