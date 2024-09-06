/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const tempNums1 = [...nums1];
  let index1 = 0,
    index2 = 0,
    index = 0;

  while (index1 < m && index2 < n) {
    if (tempNums1[index1] <= nums2[index2]) {
      nums1[index++] = tempNums1[index1++];
    } else {
      nums1[index++] = nums2[index2++];
    }
  }

  while (index1 < m) {
    nums1[index++] = tempNums1[index1++];
  }

  while (index2 < n) {
    nums1[index++] = nums2[index2++];
  }
}
