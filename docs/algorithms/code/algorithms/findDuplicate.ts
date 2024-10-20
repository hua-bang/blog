function findDuplicate(nums: number[]): number {
  const map: Record<number, number> = {};

  for(let num of nums) {
    if(map[num] !== undefined) {
      return num;
    }
    map[num] = 1;
  }

  return -1;
};

function findDuplicate(nums: number[]): number {
  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === nums[i + 1]) {
      return nums[i];
    }
  }  


  return -1;
};