func removeElement(nums []int, val int) int {
	count := 0
	n := len(nums)

	for i := 0; i < n; i++ {
		if nums[i] != val {
			nums[count] = nums[i]
			count++
		}
	}

	return count
}