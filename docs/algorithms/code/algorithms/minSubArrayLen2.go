// 思路：遍历过程中，用两个指针，记录两个指针之间的和，如果和大于等于target，就将左指针向右移动，每次循环移动右边指针
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(1)

import "math"

func minSubArrayLen(target int, nums []int) int {
	n, min := len(nums), math.MaxInt32
	sum, left, right := 0, 0, 0

	for right < n {
		sum += nums[right]

		for sum >= target {
			if min > right-left+1 {
				min = right - left + 1
			}
			sum -= nums[left]
			left++
		}

		right++
	}

	if min == math.MaxInt32 {
		return 0
	}

	return min
}