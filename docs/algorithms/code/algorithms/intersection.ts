function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>();
  const res: number[] = [];

  for (let num of nums1) {
    set.add(num);
  }

  for (let num of nums2) {
    if (set.has(num) && !res.includes(num)) {
      res.push(num);
    }
  }

  return res;
};