// 思路：采用动态规划。
// 定义状态： dp[i][j] 表示当前背包容量为 j 时，前 i 个物品的最大价值
// 状态转移方程:
// 1. 如果 j < weights[i]，说明当前物品无法放入背包，那么 dp[i][j] = dp[i - 1][j]
// 2. 如果 j >= weights[i]，说明当前物品可以放入背包，那么 dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i])
// 复杂度分析：时间复杂度 O(n * capacity)，空间复杂度 O(n * capacity)
// 其中 n 为物品数量，capacity 为背包容量

/**
 * 0-1 Knapsack Problem Template
 * @param capacity - The maximum weight capacity of the knapsack
 * @param weights - Array of weights for each item
 * @param values - Array of values for each item
 * @return The maximum value that can be achieved
 */
function knapsack01(capacity: number, weights: number[], values: number[]): number {
  // Your implementation here

  const n = weights.length;
  const dp = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let j = weights[0]; j <= capacity; j++) {
    dp[0][j] = values[0];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (j < weights[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i]] + values[i]);
      }
    }
  }

  return dp[n - 1][capacity];
}

// Example usage:
function main() {
  const weights = [2, 3, 4, 5];
  const values = [3, 4, 5, 6];
  const capacity = 8;

  const result = knapsack01(capacity, weights, values);
  console.log("Maximum value:", result);
}

// Test cases
function test() {
  // Test case 1: Basic case
  let weights1 = [1, 2, 3];
  let values1 = [6, 10, 12];
  let capacity1 = 5;
  console.log(knapsack01(capacity1, weights1, values1));  // Expected output: 22

  // Test case 2: Cannot take any items
  let weights2 = [4, 5, 6];
  let values2 = [1, 2, 3];
  let capacity2 = 3;
  console.log(knapsack01(capacity2, weights2, values2));  // Expected output: 0

  // Test case 3: Can take all items
  let weights3 = [1, 2, 3];
  let values3 = [10, 20, 30];
  let capacity3 = 10;
  console.log(knapsack01(capacity3, weights3, values3));  // Expected output: 60
}
