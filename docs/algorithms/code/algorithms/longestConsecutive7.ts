// 遍历每个元素，
// 遍历过程中：先
//  - 判断前置有无元素，如前置有元素，说明这个节点在其他地方会遍历
//  - 判断是否有连续序列，不断 + 1
// 从而统计最长长度
// 时间复杂度 O(n) O(n)
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) {
      continue;
    }

    let currNum = num;
    while (set.has(currNum + 1)) {
      currNum += 1;
    }

    max = Math.max(max, currNum - num + 1);
  }

  return max;
};
