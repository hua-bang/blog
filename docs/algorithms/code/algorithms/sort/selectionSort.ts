// 选择排序的思路：每一次循环选出最小的出来。
// 第 n 次循环则选择最小的到 nums[n - 1] 中
// const selectionSort = (nums: number[]) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     let k = i;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[k] > nums[j]) {
//         [nums[j], nums[k]] = [nums[k], nums[j]];
//       }
//     }
//   }
// };

// 本质是每次选择最小的一个在前面

const selectionSort = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
}

const arr = [1, 3, 7, 5, 2];
selectionSort(arr);
console.log("arr", arr);
