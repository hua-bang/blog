func twoSum(nums []int, target int) []int {
	n := len(nums)
	if n == 0 {
		return []int{}
	}

	hashTable := make(map[int]int)

	for i, x := range nums {
		p, ok := hashTable[target-x]

		if ok {
			return []int{p, i}
		} else {
			hashTable[x] = i
		}
	}

	return []int{}
}
