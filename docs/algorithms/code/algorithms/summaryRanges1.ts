// 思路： 指针遍历，主要是在循环的时候找 nums[i + 1] === end + 1
// 复杂度：时间复杂度 O(n), 空间复杂度（包含输出空间） O(n)
function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];

  let i = 0;

  while (i < nums.length) {
    let begin = nums[i], end = nums[i];

    while (nums[i + 1] === end + 1) {
      i++;
      end++;
    }

    if (begin === end) {
      res.push(`${begin}`);
    } else {
      res.push(`${begin}->${end}`)
    }
    i++;
  }

  return res;
};