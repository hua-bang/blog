func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	hashMap := make(map[rune]int)

	for _, char := range s {
		hashMap[char]++
	}

	for _, char := range t {
		curr, ok := hashMap[char]

		if !ok || curr == 0 {
			return false
		}

		hashMap[char]--
	}

	return true
}