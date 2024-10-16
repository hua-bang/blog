function topKFrequent(nums: number[], k: number): number[] {
  const map: Record<number, number> = {};
  
  for(let num of nums) {
    if(map[num] === undefined) {
      map[num] = 0;
    }
    map[num]++;
  }

  const arr = Object.keys(map).sort((a, b) => {
    return map[b as any] - map[a as any];
  }).map(Number);

  return arr.slice(0, k);
};

const res = topKFrequent([1,1,1,2,2,3], 2)

console.log('res', res);