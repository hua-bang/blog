// 思路：采用 hash 表，先记录，后对比
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
func twoSum(nums []int, target int) []int {
	hash := make(map[int]int)

	for i, v := range nums {
		if p, ok := hash[target-v]; ok {
			return []int{p, i}
		}

		hash[v] = i
	}

	return nil
}