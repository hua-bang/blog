/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const map: Record<number, number> = {
    0: 0,
    1: 0,
    2: 0
  };

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]]++;
  }

  let index = 0;
  [0, 1, 2].forEach(num => {
    const arr = new Array(map[num] || 0).fill(num);

    arr.forEach(item => {
      nums[index++] = item;
    });
  });
};