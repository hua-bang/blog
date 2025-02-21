// 思路：从两边向中间遍历，每次取两边中较大的数，然后将其放入结果数组中
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n)
func sortedSquares(nums []int) []int {
	n := len(nums)
	res := make([]int, n)

	left, right := 0, n-1
	index := n - 1

	for left <= right {
		currLeft := nums[left] * nums[left]
		currRight := nums[right] * nums[right]

		if currLeft > currRight {
			res[index] = currLeft
			left++
		} else {
			res[index] = currRight
			right--
		}
		index--
	}

	return res
}