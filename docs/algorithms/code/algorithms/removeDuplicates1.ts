/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

  let index = m + n - 1, num1Index = m - 1, num2Index = n - 1;
  while(num1Index >= 0 && num2Index >= 0) {
    if (nums1[num1Index] >= nums2[num2Index]) {
      nums1[index--] = nums1[num1Index--];
    } else {
      nums1[index--] = nums2[num2Index--];
    }
  }

  while(num2Index >= 0) {
    nums1[index--] = nums2[num2Index--];
  }
};