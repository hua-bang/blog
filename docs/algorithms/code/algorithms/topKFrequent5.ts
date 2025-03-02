function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};

  for(let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if(map[curr] === undefined) {
      map[curr] = 0;
    }
    map[curr]++;
  }

  return Object.keys(map).sort((a, b) => map[b] - map[a]).map(Number).slice(0, k);
};