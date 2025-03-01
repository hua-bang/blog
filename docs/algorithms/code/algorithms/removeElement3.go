// 思路：使用单个指针，遍历数组，当当前元素不等于val时，将当前元素赋值给nums[count]，count++
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
func removeElement(nums []int, val int) int {
	count := 0

	for _, curr := range nums {
		if curr != val {
			nums[count] = curr
			count++
		}
	}

	return count
}