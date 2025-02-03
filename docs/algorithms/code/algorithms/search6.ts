function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    const mid = (left + right) >> 1;
    const curr = nums[mid];
    if(curr === target) {
      return mid;
    }

    if(curr > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }  

  return -1;
};