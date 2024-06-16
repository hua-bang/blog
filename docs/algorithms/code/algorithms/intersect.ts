// https://leetcode.cn/problems/intersection-of-two-arrays-ii/

// 哈希表
function intersect(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, number> = {};
  let res: number[] = [];

  // 较短数组
  const aNums = nums1.length > nums2.length ? nums2 : nums1;
  // 较长数组
  const bNums = nums1.length > nums2.length ? nums1 : nums2;

  for (let i = 0; i < aNums.length; i++) {
    if (map[aNums[i]]) {
      map[aNums[i]] += 1;
    } else {
      map[aNums[i]] = 1;
    }
  }

  for (let i = 0; i < bNums.length; i++) {
    if (map[bNums[i]]) {
      res.push(bNums[i]);
      map[bNums[i]] -= 1;
    }
  }

  return res;
}

// 双指针
function intersect(nums1: number[], nums2: number[]): number[] {
  let n1: number = 0,
    n2: number = 0;
  const result: number[] = [];

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      result.push(nums1[n1]);
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
