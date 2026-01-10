// 哈希表 时间复杂度 O(n + m) 空间复杂度 O(n)
function intersection(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, boolean> = {};
  const res: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] && !res.includes(nums2[i])) {
      res.push(nums2[i]);
    }
  }

  return res;
};