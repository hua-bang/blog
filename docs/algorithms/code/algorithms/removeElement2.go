// 思路：通过遍历整个数组，同时记录不等于val的元素个数，然后将不等于val的元素赋值给数组的前count个元素，最后返回count
// 复杂度：时间复杂度：O(n)， 空间复杂度：O(1)
func removeElement(nums []int, val int) int {
	count := 0

	for _, num := range nums {
		if val != num {
			nums[count] = num
			count++
		}
	}

	return count
}