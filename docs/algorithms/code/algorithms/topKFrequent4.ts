// 概述：给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
// 思路：使用哈希表记录，然后再排序处理，返回前k个
function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};

  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k).map(Number);
};