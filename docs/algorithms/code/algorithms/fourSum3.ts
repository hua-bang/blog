// 概览：找到和为0的四元组。
// 思路：先排序，双重遍历，再用双指针，时间复杂度O(n^3)。
function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = [];

  nums.sort((a, b) => a - b);
  let length = nums.length;

  for (let first = 0; first < length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }

    for (let second = first + 1; second < length; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }

      let third = second + 1;
      let fourth = length - 1;

      while (third < fourth) {
        const sum = nums[first] + nums[second] + nums[third] + nums[fourth];
        if (sum === target) {
          res.push([
            nums[first],
            nums[second],
            nums[third],
            nums[fourth]
          ]);
          while (third < fourth && nums[third] === nums[third + 1]) {
            third++;
          }
          while (third < fourth && nums[fourth] === nums[fourth - 1]) {
            fourth--;
          }
          third++;
          fourth--;
        } else if (sum < target) {
          while (third < fourth && nums[third] === nums[third + 1]) {
            third++;
          }
          third++;
        } else {
          while (third < fourth && nums[fourth] === nums[fourth - 1]) {
            fourth--;
          }
          fourth--;
        }
      }
    }
  }

  return res;
}