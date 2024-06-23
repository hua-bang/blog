/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left = m - 1,
    right = n - 1;
  let index = m + n - 1;

  while (left >= 0 && right >= 0) {
    if (nums1[left] >= nums2[right]) {
      nums1[index--] = nums1[left--];
    } else {
      nums1[index--] = nums2[right--];
    }
  }

  while (right >= 0) {
    nums1[index--] = nums2[right--];
  }
}
