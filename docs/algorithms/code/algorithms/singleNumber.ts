function singleNumber(nums: number[]): number {
  let res: number = 0;

  for (let num of nums) {
    res ^= num;
  }

  return res;
}
