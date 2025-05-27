/**
 * moveZeroes 算法解法比较
 */

// 当前解法：覆盖法（两次遍历）
function moveZeroesOverwrite(nums: number[]): void {
  let count = 0;

  // 第一次遍历：将非零元素前移
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count++] = nums[i];
    }
  }

  // 第二次遍历：将剩余位置填充为0
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// 优化解法：双指针交换法（一次遍历）
function moveZeroesOptimized(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      if (left !== right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
}

// 性能测试函数
function performanceTest() {
  const testCases = [
    [0, 1, 0, 3, 12],
    [0, 0, 1],
    [1, 2, 3, 0, 0, 0],
    [0, 0, 0, 1, 2, 3],
    Array(10000).fill(0).concat(Array(10000).fill(1))
  ];

  console.log('=== moveZeroes 算法性能比较 ===\n');

  testCases.forEach((testCase, index) => {
    console.log(`测试用例 ${index + 1}: [${testCase.length <= 10 ? testCase.join(', ') : `${testCase.slice(0, 5).join(', ')}...长度${testCase.length}`}]`);

    // 测试覆盖法
    const nums1 = [...testCase];
    const start1 = performance.now();
    moveZeroesOverwrite(nums1);
    const end1 = performance.now();

    // 测试优化法
    const nums2 = [...testCase];
    const start2 = performance.now();
    moveZeroesOptimized(nums2);
    const end2 = performance.now();

    console.log(`  覆盖法耗时: ${(end1 - start1).toFixed(4)}ms`);
    console.log(`  优化法耗时: ${(end2 - start2).toFixed(4)}ms`);
    console.log(`  结果一致: ${JSON.stringify(nums1) === JSON.stringify(nums2)}`);
    console.log(`  结果: [${nums1.length <= 10 ? nums1.join(', ') : `${nums1.slice(0, 5).join(', ')}...`}]\n`);
  });
}

// 写操作次数分析
function writeOperationAnalysis() {
  console.log('=== 写操作次数分析 ===\n');

  const testArray = [0, 1, 0, 3, 12];
  console.log(`原数组: [${testArray.join(', ')}]`);

  // 分析覆盖法的写操作
  console.log('\n覆盖法写操作:');
  let writeCount1 = 0;
  const nums1 = [...testArray];
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== 0) {
      nums1[count++] = nums1[i];
      writeCount1++;
      console.log(`  写操作 ${writeCount1}: nums[${count - 1}] = ${nums1[i]}`);
    }
  }

  for (let i = count; i < nums1.length; i++) {
    nums1[i] = 0;
    writeCount1++;
    console.log(`  写操作 ${writeCount1}: nums[${i}] = 0`);
  }

  // 分析优化法的写操作
  console.log('\n优化法写操作:');
  let writeCount2 = 0;
  const nums2 = [...testArray];
  let left = 0;

  for (let right = 0; right < nums2.length; right++) {
    if (nums2[right] !== 0) {
      if (left !== right) {
        [nums2[left], nums2[right]] = [nums2[right], nums2[left]];
        writeCount2 += 2; // 交换算作2次写操作
        console.log(`  交换操作 ${Math.ceil(writeCount2 / 2)}: swap(nums[${left}], nums[${right}]) -> [${nums2[left]}, ${nums2[right]}]`);
      }
      left++;
    }
  }

  console.log(`\n总写操作次数:`);
  console.log(`  覆盖法: ${writeCount1} 次`);
  console.log(`  优化法: ${writeCount2} 次`);
  console.log(`\n优化法优势: ${writeCount1 > writeCount2 ? `减少了 ${writeCount1 - writeCount2} 次写操作` : '在此例中写操作次数相近'}`);
}

// 运行测试
if (typeof window === 'undefined') {
  performanceTest();
  writeOperationAnalysis();
}

export { moveZeroesOverwrite, moveZeroesOptimized, performanceTest, writeOperationAnalysis }; 