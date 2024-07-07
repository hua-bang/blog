function summaryRanges(nums: number[]): string[] {
  if (!nums.length) {
    return [];
  }
  
  const res: string[] = [];
  
  for(let i = 0; i < nums.length; i++) {
    let left = i, right = i;
    
    while (right < nums.length && nums[right] === nums[right + 1] - 1) {
      right++;
    }
    
    if (left !== right) {
      res.push(`${nums[left]}->${nums[right]}`);
    } else {
      res.push(`${nums[left]}`);
    }
    
    i = right;
  }
  
  return res;
};