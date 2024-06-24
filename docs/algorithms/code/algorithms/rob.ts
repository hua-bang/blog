function rob(nums: number[]): number {
  const n = nums.length;

  let noStole = 0;
  let stole = nums[0];

  let max = Math.max(noStole, stole);

  for (let i = 1; i < n; i++) {
    let prev = noStole;
    noStole = Math.max(prev, stole);
    stole = prev + nums[i];
    max = Math.max(noStole, stole, max);
  }

  return max;
}
