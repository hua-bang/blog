func sortedSquares(nums []int) []int {
	res := make([]int, len(nums))

	left := 0
	right := len(nums) - 1
	pos := len(nums) - 1

	for left <= right {
		leftVal := nums[left] * nums[left]
		rightVal := nums[right] * nums[right]

		if leftVal >= rightVal {
			res[pos] = leftVal
			left++
		} else {
			res[pos] = rightVal
			right--
		}
		pos--
	}

	return res
}