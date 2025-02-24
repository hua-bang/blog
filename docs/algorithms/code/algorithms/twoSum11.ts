// 思路：使用哈希表记录，遍历一遍，如果遇到 target - curr 存在，则返回
// 复杂度分析： 时间复杂度 O(n), 空间复杂度 O(n)
function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for(let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if(map[target - curr] !== undefined) {
      return [i, map[target - curr]]
    }
    map[curr] = i;
  }  

  return [-1, -1]
};