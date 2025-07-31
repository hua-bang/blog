// 双指针：一个指针指向开始索引，另一个指针指向后续连续区间索引。
// 复杂度：时间复杂度 O(n), 空间复杂度 O(n)
function summaryRanges(nums: number[]): string[] {
  const res: string[] = [];

  let index = 0;

  while (index < nums.length) {
    let start = nums[index], end = nums[index];

    while (index < nums.length - 1 && nums[index + 1] === end + 1) {
      end = end + 1;
      index++;
    }

    res.push(start === end ? `${start}` : `${start}->${end}`);
    index++;
  }

  return res;
};