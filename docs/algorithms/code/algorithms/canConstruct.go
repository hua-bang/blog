func canConstruct(ransomNote string, magazine string) bool {
	hash := make(map[rune]int)

	if len(ransomNote) > len(magazine) {
		return false
	}

	for _, v := range magazine {
		if _, ok := hash[v]; !ok {
			hash[v] = 0
		}
		hash[v] = hash[v] + 1
	}

	for _, v := range ransomNote {
		if v, ok := hash[v]; !ok || v == 0 {
			return false
		}
		hash[v] = hash[v] - 1
	}

	return true
}