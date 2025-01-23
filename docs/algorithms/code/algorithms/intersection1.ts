// 概览：需要查询 num1 和 num2 的交集。
// 思路：用哈希表做遍历操作，遍历 nums1 数组，将数组中的元素存入哈希表中，然后遍历 nums2 数组，如果哈希表中存在当前元素，则将当前元素存入结果数组中。
// 注意：最终的数据需要去重。
// 时间复杂度 O(n + m) 空间复杂度 O(n)

function intersection(nums1: number[], nums2: number[]): number[] {
  const map: Record<string, boolean> = {};

  for(let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }  

  const res: number[] = [];
  for(let i = 0; i < nums2.length; i++) {
    const currVal = nums2[i];
    if(map[currVal] && !res.includes(currVal)) {
      res.push(currVal);
    }
  }  
  
  return res;
};