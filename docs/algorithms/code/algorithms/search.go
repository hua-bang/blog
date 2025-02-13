func search(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := (left + right) / 2

		value := nums[mid]

		if value == target {
			return mid
		}

		if value > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1
}