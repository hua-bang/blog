function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else {
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      }
    }
  }

  return res;
};