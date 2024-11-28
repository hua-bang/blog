/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n - 1;
  let nums1Index = m - 1, nums2Index = n - 1;

  while (nums1Index >= 0 && nums2Index >= 0) {
    if (nums1[nums1Index] >= nums2[nums2Index]) {
      nums1[index--] = nums1[nums1Index--];
    } else {
      nums1[index--] = nums2[nums2Index--];
    }
  }

  while (nums1Index >= 0) {
    nums1[index--] = nums1[nums1Index--];
  }

  while (nums2Index >= 0) {
    nums1[index--] = nums2[nums2Index--];
  }
};