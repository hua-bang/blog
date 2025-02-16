func sortedSquares(nums []int) []int {
	n := len(nums);

	res := make([]int, n)

	left, right := 0, n - 1;
	pos := n - 1;

	for left <= right {
		leftVal := nums[left] * nums[left]
		rightVal := nums[right] * nums[right]

		if leftVal >= rightVal {
			res[pos] = leftVal;
			left++;
		} else {
			res[pos] = rightVal;
			right--;
		}
		pos--;
	}

	return res;
}