// 思路：使用哈希表进行记录，然后进行对比
// 复杂度分析：时间复杂度为 O(n), 空间复杂度为 O(1)， 因为数字是固定的
func intersection(nums1 []int, nums2 []int) []int {
	res := make([]int, 0)
	hash := make(map[int]bool)

	for _, v := range nums1 {
		hash[v] = true
	}

	for _, v := range nums2 {
		if hash[v] {
			res = append(res, v)
			hash[v] = false
		}
	}

	return res
}