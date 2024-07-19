function singleNumber(nums: number[]): number {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }
    map[nums[i]] = map[nums[i]] + 1;
  }

  console.log("map", map);

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === 1) {
      return nums[i];
    }
  }

  return -1;
}

console.log(singleNumber([2, 2, 3, 2]));

function singleNumber2(nums: number[]): number {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let total = 0;

    for (let num of nums) {
      total += (num >> i) & 1;
    }
    if (total % 3 !== 0) {
      ans |= 1 << i;
    }
  }

  return ans;
}
