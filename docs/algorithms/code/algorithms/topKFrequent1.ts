function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (map[value] === undefined) {
      map[value] = 0;
    }
    map[value] = map[value] + 1;
  }

  const res = Object.keys(map).sort((a, b) => {
    return map[b] - map[a];
  }).map(Number);

  return res.slice(0, k);
};