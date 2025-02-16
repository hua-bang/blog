func search(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := (left + right) / 2;

		curr := nums[mid];

		if curr == target {
			return mid;
		} else if curr > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return -1;
}