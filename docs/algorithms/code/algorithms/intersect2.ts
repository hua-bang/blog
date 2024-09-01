function intersect(nums1: number[], nums2: number[]): number[] {
  let n1: number = 0,
    n2: number = 0;
  const result: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      result.push(nums2[n2]);
      n1++;
      n2++;
      continue;
    }

    if (nums1[n1] > nums2[n2]) {
      n2++;
    } else {
      n1++;
    }
  }

  return result;
}
