function countingSort(nums: number[]) {
  const m = Math.max(...nums);

  const counters = new Array(m + 1).fill(0);

  for (const num of nums) {
    counters[num]++;
  }

  let i = 0;
  for (let num = 0; num < counters.length; num++) {
    for (let j = 0; j < counters[num]; j++) {
      nums[i] = num;
      i++;
    }
  }
}

const a = [1, 3, 2, 3, 4, 2, 1];

countingSort(a);

console.log("a", a);
