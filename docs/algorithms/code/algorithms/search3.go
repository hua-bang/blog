// 思路：二分查找
// 复杂度分析：时间复杂度 O(logN), 空间复杂度 O(1)
func search(nums []int, target int) int {
	n := len(nums)
	left, right := 0, n-1

	for left <= right {
		mid := left + (right-left)/2

		curr := nums[mid]

		if curr == target {
			return mid
		}

		if curr > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}