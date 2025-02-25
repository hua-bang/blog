// 思路：采用 hash 表，先记录，后对比
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1), 数字是固定的，所以空间复杂度是 O(1)
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	hash := make(map[byte]int)

	for i := 0; i < len(s); i++ {
		if _, ok := hash[s[i]]; !ok {
			hash[s[i]] = 0
		}
		hash[s[i]]++
	}

	for i := 0; i < len(t); i++ {
		if v, ok := hash[t[i]]; !ok || v == 0 {
			return false
		}
		hash[t[i]]--
	}

	return true
}