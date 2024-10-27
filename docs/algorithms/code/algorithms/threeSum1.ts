function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length, res: number[][] = [];

  for(let i = 0; i < n; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1, right = n - 1;
    while(left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if(sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        
        while(nums[left] === nums[left + 1]) {
          left++;
        }

        while(nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
        continue;
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};