function intersection(nums1: number[], nums2: number[]): number[] {
  const map: Record<number, boolean> = {};

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