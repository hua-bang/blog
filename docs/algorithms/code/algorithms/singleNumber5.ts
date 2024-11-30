function singleNumber(nums: number[]): number {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let count = 0;

    for (let num of nums) {
      count += ((num >> i) & 1);
    }

    if (count % 3 !== 0) {
      ans |= (1 << i);
    }
  }

  return ans;
}
