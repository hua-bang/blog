function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let i = 0;

  let target = nums[0];
  let max = 1;

  while (i < nums.length) {
    let count = 1;
    while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      i++;
      count++;
    }

    if (count > max) {
      max = count;
      target = nums[i];
    }
    i++;
  }

  return target;
}

function majorityElement(nums: number[]): number {
  let target = nums[0];

  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (target === nums[i]) {
      count = count + 1;
    } else {
      count = count - 1;
    }

    if (count === 0) {
      target = nums[i];
      count = 1;
    }
  }

  return target;
}
