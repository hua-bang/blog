function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};

  for(let num of nums) {
    if(map[num] === undefined) {
      map[num] = 0;
    }
    map[num] = map[num] + 1;
  }

  const arr = Object.keys(map).sort((a, b) => map[b] - map[a]).map(Number);
  return arr.slice(0, k);
};