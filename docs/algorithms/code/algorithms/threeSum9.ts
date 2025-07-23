// 思路：排序 + 双指针
// 复杂度：时间复杂度 O(n ^ 2)
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const res: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1, right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([
          nums[i],
          nums[left],
          nums[right]
        ]);

        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        left++;

        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      } else if (sum > 0) {
        while (left < right && nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      } else {
        while (left < right && nums[left + 1] === nums[left]) {
          left++;
        }
        left++;
      }
    }
  }

  return res;
};