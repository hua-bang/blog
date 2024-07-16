function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      count1++;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      count2++;
    }
  }

  return [count1, count2];
}
