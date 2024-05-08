function bucketSort(nums: number[]): void {
  const k = nums.length / 2;
  const buckets: number[][] = [];
  for (let i = 0; i < k; i++) {
    buckets.push([]);
  }

  for (const num of nums) {
    // 输入数据范围为 [0, 1)，使用 num * k 映射到索引范围 [0, k-1]
    const i = Math.floor(num * k);
    // 将 num 添加进桶 i
    buckets[i].push(num);
  }

  for (const bucket of buckets) {
    // 使用内置排序函数，也可以替换成其他排序算法
    bucket.sort((a, b) => a - b);
  }

  let i = 0;

  for (const bucket of buckets) {
    for (const num of bucket) {
      nums[i++] = num;
    }
  }
}
