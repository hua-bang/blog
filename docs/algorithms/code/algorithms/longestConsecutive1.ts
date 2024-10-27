function longestConsecutive(nums: number[]): number {
  if(!nums.length) {
    return 0;
  }  

  nums.sort((a, b) => a - b);
  const set = new Set(nums);

  let max = 0;

  for(let num of set) {
    if (set.has(num - 1)) {
      continue;
    }

    let currentNum = num;

    while(set.has(currentNum + 1)) {
      currentNum += 1;
    }

    max = Math.max(max, currentNum - num + 1);
  }

  return max;
};