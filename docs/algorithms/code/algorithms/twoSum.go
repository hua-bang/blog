package main

func twoSum(nums []int, target int) []int {
	n := len(nums)
	if n == 0 {
		return []int{}
	}

	hashTable := make(map[int]int)

	for i, x := range nums {
		if p, ok := hashTable[target-x]; ok {
			return []int{p, i}
		}

		hashTable[x] = i
	}

	return []int{}
}
