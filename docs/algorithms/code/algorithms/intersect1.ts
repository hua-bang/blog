function intersect(nums1: number[], nums2: number[]): number[] {
  let index1 = 0,
    index2 = 0;
  const res: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) {
      res.push(nums1[index1]);
      index1++;
      index2++;
      continue;
    }

    if (nums1[index1] > nums2[index2]) {
      index2++;
    } else {
      index1++;
    }
  }

  return res;
}
