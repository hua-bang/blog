function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};

  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 0;
    }
    map[num]++;
  }

  const res = Object.keys(map).sort((a, b) => {
    return map[b] - map[a];
  }).map(Number);

  return res.slice(0, k);
};