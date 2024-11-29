function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const val = nums[i] + nums[left] + nums[right];
      if (val === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        right--;
      } else if (val > 0) {
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else {
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      }
    }
  }

  return res;
};