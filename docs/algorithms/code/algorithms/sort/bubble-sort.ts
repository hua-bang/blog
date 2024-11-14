// const bubbleSort = (arr: number[]) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
// };

// 本质上是每次选择最大的出去

const bubbleSort = (nums: number[]) => {
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
}

const a = [4, 5, 3, 1];

bubbleSort(a);

console.log(a);
