function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for(let i = 0; i < nums.length; i++) {
    const currVal = nums[i];

    if(map[target - currVal] !== undefined) {
      return [i, map[target - currVal]];
    }

    map[currVal] = i;
  }  

  return [-1, -1];
};