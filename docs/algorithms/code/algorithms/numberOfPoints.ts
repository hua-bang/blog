function numberOfPoints(nums: number[][]): number {
  const arr: number[] = [];
  nums.sort((aNum, bNum) => aNum[0] - bNum[0]);

  for (let numArr of nums) {
    const lastEnd = arr[arr.length - 1] || -1;
    let [start, end] = numArr;
    if (end <= lastEnd) {
      continue;
    }
    start = Math.max(start, lastEnd);
    for (let i = start; i <= end; i++) {
      if (i !== lastEnd) {
        arr.push(i);
      }
    }
  }

  return arr.length;
}
