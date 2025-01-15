function findSubsequences(nums: number[]): number[][] {
  const resArr: number[][] = [];
  const arr: number[] = [];
  
  function backTracking(startIndex: number): void {
    if(arr.length >= 2) {
      resArr.push([...arr]);
    }

    if(startIndex >= nums.length) {
      return;
    }

    const set = new Set<number>();

    for(let i = startIndex; i < nums.length; i++) {
      if(set.has(nums[i])) {
        continue;
      }
      if(arr.length && nums[i] < arr[arr.length - 1]) {
        continue;
      }

      set.add(nums[i]);

      arr.push(nums[i]);
      backTracking(i+1);
      arr.pop();
    }
  }

  backTracking(0);
  return resArr;
};