function rob(nums: number[]): number {
  const n = nums.length;

  let noStole = 0,
    hasStole = nums[0];
  let max = Math.max(noStole, hasStole);

  for (let i = 1; i < n; i++) {
    let prev = noStole;
    noStole = Math.max(prev, hasStole);
    hasStole = Math.max(prev + nums[i], hasStole);
    max = Math.max(noStole, hasStole, max);
  }

  return max;
}
