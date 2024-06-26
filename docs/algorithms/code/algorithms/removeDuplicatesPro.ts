function removeDuplicates(nums: number[]): number {
  let left = 0,
    right = 0;

  while (right < nums.length) {
    let tempRight = right;

    while (
      tempRight < nums.length - 1 &&
      nums[tempRight] === nums[tempRight + 1]
    ) {
      tempRight++;
    }

    if (tempRight === right) {
      nums[left] = nums[tempRight];
      left++;
    } else {
      nums[left] = nums[tempRight];
      nums[left + 1] = nums[tempRight];
      left = left + 2;
    }
    right = tempRight;
    right++;
  }

  return left;
}
